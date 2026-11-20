---
name: sync-figma
description: Sync SDS React components with the Simple Design System Figma file. Reads components via the Figma MCP, matches them to code through the Code Connect files in src/figma, lists every Figma-vs-code difference, updates components, stories and Code Connect templates, verifies with TypeScript, Code Connect parse and Storybook, and writes a PR description. Use when asked to "sync with Figma", "check for design drift", "update components from Figma", or /sync-figma.
argument-hint: "[figma-url] [component names…]  e.g. /sync-figma button tag"
---

# sync-figma

Bring code in line with Figma, one component at a time, so drift is visible and the changes can be reviewed.
**Figma is the source of truth** for visual design and the component API (variants, props, states).
**Code is the source of truth** for behaviour, accessibility and the React Aria wiring. Never trade those away to match a layer tree.

## Inputs

- **Figma file.** By default this is the file in [figma.config.json](../../../figma.config.json) (`documentUrlSubstitutions`, currently file key `U1BbwAjlL0jzXUHdKM0cAF`). If the user passes a Figma URL, use it instead. For `/design/:fileKey/branch/:branchKey/…` use `branchKey`. If the URL has a `node-id`, limit the sync to that node and its children.
- **Scope.** Any remaining arguments are component-name filters (`button`, `tag`, `inputfield`). With no filters, sync **everything**, but first tell the user how many components that is and offer to narrow it, because a full sync makes roughly 100 MCP calls.

## Step 0: Preflight

`$SCRATCH` below means this session's scratchpad directory. Set it once with `SCRATCH=<scratchpad path>` and use absolute paths. Don't write sync artifacts into the repo.

1. Run `git status --short` and `git branch --show-current`.
   - If you're on `main`, create a branch: `git switch -c sync-figma/<YYYY-MM-DD>`.
   - If there are uncommitted changes, list them and ask the user whether to continue on top of them. Never stash or discard them yourself.
2. Record baselines in the scratchpad so the checks in Step 5 only flag regressions you introduced:
   ```bash
   npx tsc --noEmit -p . 2>&1 | grep "error TS" | sort > "$SCRATCH/tsc-before.txt"
   npx figma connect parse --skip-update-check --exit-on-unreadable-files -o "$SCRATCH/cc-before.json"
   ```
   The repo already has some `tsc` errors on `main`. That is expected. Only **new** errors count as breakage.
3. Read [src/AGENTS.md](../../../src/AGENTS.md) and the `AGENTS.md` for the layers you'll touch ([primitives](../../../src/ui/primitives/AGENTS.md), [compositions](../../../src/ui/compositions/AGENTS.md), [layout](../../../src/ui/layout/AGENTS.md)). Follow their conventions for imports, aliases, CSS variables and layout components.

## Step 1: Build the Figma ↔ code map

```bash
node .claude/skills/sync-figma/scripts/map-components.mjs [filters…] > "$SCRATCH/map.json"
```

Each entry has `component`, `kind`, `codeConnectFile`, `figmaUrl`, `fileKey`, `nodeId`, `sourcePath`, `cssFiles`, `stories` and `problems`.

- `kind: "component"`: a real React component in `src/ui/…`. Sync both the implementation and the Code Connect template.
- `kind: "template-only"`: a composition template (card grids, pages) with **no single source component**. PR #53 removed its attribution on purpose. Don't add a `// source=` header. Only compare the template's `example` against Figma.
- `problems`: broken mappings, such as a missing `url=` header, a placeholder missing from `figma.config.json`, or a source file that doesn't exist. Report these as differences.
- Several `.figma.ts` files can point at the same component (for example `Button.figma.ts` and `ButtonDanger.figma.ts` both map to `Button`). Diff them together.

## Step 2: Read Figma via the MCP

Load the Figma MCP tools with ToolSearch: `create_session`, `get_metadata`, `get_design_context`, `get_variable_defs`, `get_code_connect_map`, `get_screenshot`, `search_design_system`. Prefer the `mcp__figma__*` server and fall back to `mcp__claude_ai_Figma__*`.

1. **Load the `figma:figma-design-to-code` skill before the first `get_design_context` call.** The Figma MCP requires it.
2. `create_session(fileKey, "sync-figma: compare components to code")`. Reuse the returned `sessionId` on every later call.
3. `get_code_connect_map` for the file. Cross-check it against `map.json`:
   - A node that is mapped in Figma but has no local `.figma.ts` means Code Connect was published from somewhere else, or the local file is stale.
   - A local `.figma.ts` whose node isn't mapped in Figma means it was never published, or the node was moved.
4. For each component in scope, run these calls (in parallel where you can):
   - `get_metadata(nodeId)`: the component set, its variant names and values, and its component properties (VARIANT, BOOLEAN, TEXT, INSTANCE_SWAP) with their defaults.
   - `get_design_context(nodeId)`: layout, spacing, radius, typography, fills and strokes, plus the variables they're bound to. Treat the generated code as a **reference only**. Never paste it in.
   - `get_variable_defs(nodeId)`: the variable names in use. Map each one to the CSS custom property in [src/theme.css](../../../src/theme.css). The names follow the pattern `--sds-color-background-brand-default`.
   - `get_screenshot(nodeId)`: kept for the visual comparison in Step 5.
5. To find **new Figma components that have no Code Connect**, run `get_metadata` on the component pages, or call `search_design_system`. List these components as "unmapped". **Don't scaffold new components** unless the user asks. A new component is a design decision, not a sync.

If a node ID no longer resolves, the component was probably moved or deleted in Figma. Report it as a difference and don't guess a replacement node.

## Step 3: List every difference

Read the code side for each component: `sourcePath`, `cssFiles`, the `.figma.ts` file, and the relevant `src/stories/**` file. Then compare across these categories:

| Category | Figma side | Code side |
|---|---|---|
| **Variants** | VARIANT property names and values | Prop unions in `*.tsx`, CSS class or `data-*` selectors |
| **Props** | BOOLEAN, TEXT and INSTANCE_SWAP properties and their defaults | Component props and default values |
| **States** | `State` variants (Hover, Disabled, Focus…) | React Aria render props, `:hover` and `[data-disabled]` CSS |
| **Tokens** | Bound variables | `var(--sds-…)` in CSS. Flag hard-coded values and wrong tokens |
| **Spacing / size** | Padding, gap, min-width and height, radius, stroke width | CSS values (should be tokens) |
| **Typography** | Text styles | `--sds-typography-*` / text classes |
| **Structure** | Slots, icon positions, nested instances | JSX children and slots |
| **Code Connect** | Property names exactly as written in Figma | `getEnum`/`getBoolean`/`getString`/`getInstanceSwap` keys and value maps in `.figma.ts` |
| **Mapping health** | Node exists, is mapped and is published | `url=`/`source=` headers, `figma.config.json` substitutions |

Write the full list to `$SCRATCH/diff.md`, grouped by component. Give each item an ID (`BTN-1`, `TAG-2`…), the Figma value, the code value, the file:line, and one of these classifications:

- **auto**: safe to apply, such as a token swap, a spacing value or a Code Connect key rename.
- **api**: changes a public prop, for example a new variant value or a renamed prop. This is still applied, but it gets called out in the PR.
- **breaking**: removes or renames something consumers use. **Ask the user before applying it.**
- **needs-token**: the Figma variable has no CSS custom property. Don't hand-edit `theme.css`, because it is generated. Tell the user to run `npm run script:tokens:rest` (or `npm run tokens:build` once the token JSON is updated), then re-run the sync.
- **figma-issue**: the design itself looks wrong, such as a detached instance, a hard-coded colour in Figma or an inconsistent variant name. Report it and don't change code to match it.

Show the user the diff summary in chat: a count per component plus every **breaking** and **figma-issue** item. Ask for a decision on the breaking items, then continue with everything else.

## Step 4: Update the code

For each component, edit in this order:

1. **Component** (`src/ui/**/X.tsx`): props, variant unions, defaults. Keep React Aria usage and accessibility intact. Use SDS primitives and aliases, never `react-aria` directly in compositions.
2. **CSS** (`cssFiles`): use CSS variables only. Never use raw hex or px when a token exists. Match the selector patterns already in the file.
3. **Code Connect** (`src/figma/**/X.figma.ts`):
   - Property keys must match Figma **exactly**, including case and spaces (`"Has Icon Start"`).
   - Value maps go from Figma values to prop values. Omit values that equal the code default, as `Button.figma.ts` already does with `Size: { Small: "small" }`.
   - Keep the `// url=<PLACEHOLDER>` header. For a new component, add its placeholder and URL to `figma.config.json` → `documentUrlSubstitutions`.
   - Keep the `// source=` GitHub URL pointing at the real file. Don't add one to template-only files.
4. **Stories** (`src/stories/**`): add or rename stories and args for new or changed variants so Storybook covers every Figma variant.
5. Update the `diff.md` item to `applied`, `skipped (why)` or `blocked (why)` as you go.

Keep each change limited to its difference item. Don't reformat or refactor nearby code.

## Step 5: Verify nothing broke

Run all of these checks. Any failure **you introduced** must be fixed, or reverted and reported:

```bash
npx tsc --noEmit -p . 2>&1 | grep "error TS" | sort > "$SCRATCH/tsc-after.txt"
comm -13 "$SCRATCH/tsc-before.txt" "$SCRATCH/tsc-after.txt"   # new errors only, must be empty
npx figma connect parse --skip-update-check --exit-on-unreadable-files -o "$SCRATCH/cc-after.json"
npm run app:lint
npm run storybook:build                                          # fails on any story compile error
```

Then do a runtime check in Storybook:

1. Start `npm run storybook` with `run_in_background`, then wait until `curl -sf http://localhost:6006/index.json` succeeds.
2. From `index.json`, confirm that every story for the touched components (see `stories` in `map.json`) is still listed, and that the new variant stories appear.
3. If a browser tool is available (load the `run` skill, or the Claude in Chrome or built-in browser skill), open each touched story at `http://localhost:6006/iframe.html?id=<story-id>&viewMode=story`. Check the console for errors and compare the result against the Figma screenshot from Step 2. Note any visible mismatches as follow-ups.
4. Stop the Storybook process when you're finished.

**Don't run `npx figma connect publish`.** It pushes to the shared Figma file. Give the user the command (`npx figma connect publish --dry-run` first) and let them run it, or run it only after they explicitly confirm.

## Step 6: PR description

Write `$SCRATCH/pr-description.md` and print it in chat, ready to paste:

```markdown
## Sync components with Figma

Figma file: <url> · Synced: <YYYY-MM-DD> · Scope: <all | components>

### Summary
<1–3 sentences: how many components were checked, how many changed, notable API changes>

### Changes
| Component | Change | Type | Files |
|---|---|---|---|
| Button | `Size` adds `Large` → `size="large"` | api | Button.tsx, button.css, Button.figma.ts, Button.stories.tsx |

### ⚠️ API / breaking changes
<prop changes consumers must know about, or "None">

### Not changed (needs follow-up)
- needs-token: …
- figma-issue: …
- unmapped Figma components: …
- skipped by request: …

### Verification
- [x] `tsc`: no new errors (N pre-existing)
- [x] `figma connect parse`: OK
- [x] `app:lint`: OK
- [x] `storybook:build`: OK
- [x] Storybook runtime: N stories checked, <visual notes>
- [ ] `npx figma connect publish` (after merge)

🤖 Generated with [Claude Code](https://claude.com/claude-code)
```

Only list checks that actually ran. Mark a failing or skipped check as `[ ]` and say why. Don't commit, push or open a PR unless the user asks. If they do, use this description as the body.

## Final reply

End with a short report: components checked and changed, the paths `$SCRATCH/diff.md` and `$SCRATCH/pr-description.md` (written as full absolute paths), any blocked or breaking items still waiting on the user, and the publish command.
