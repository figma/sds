import fs from "fs";

// run with node --env-file=.env app.mjs
const TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const URL_BASE = "https://api.staging.figma.com/v1/files";
const FILE_URL_BASE = "https://staging.figma.com/design/";
const FILE_KEY = "YfiqA0yWMXuLJAzkZNpBdy";

export async function getFileData(fileKey, pageName) {
  try {
    const fileResponse = await fetch(`${URL_BASE}/${fileKey}`, {
      method: "GET",
      headers: { "X-FIGMA-TOKEN": TOKEN },
    });
    const data = await fileResponse.json();
    return fileRESTResponseToJSON(data, pageName);
  } catch (e) {
    throw e;
  }
}

function fileRESTResponseToJSON(response, pageName) {
  const page = response.document.children.find(({ name }) => name === pageName);
  const result = [];
  const files = [];
  if (page) {
    page.children.forEach((child) => {
      if (child.type === "SECTION") {
        const section = { name: child.name, components: [] };
        const file = {
          name: child.name.replace(/[^A-Za-z]/g, ""),
          lines: [
            `import { figma } from "@figma/code-connect"; import { Flex, FlexItem, Section } from "../../ui";`,
          ],
        };
        files.push(file);
        result.push(section);
        child.children.forEach((item) => {
          if (item.type === "COMPONENT" || item.type === "COMPONENT_SET") {
            const children = [];
            traverseChildren(item.children, children);
            file.lines.push(
              [
                `// ${child.name}: ${item.name}`,
                `figma.connect(Section, "${FILE_URL_BASE}${FILE_KEY}?node-id=${item.id}", { props: { children: figma.children(${JSON.stringify(children)}) }, example: ({ children }) => (<Section><Flex direction="row" wrap container>{children}</Flex></Section>) })`,
              ].join("\n"),
            );
            section.components.push({ name: item.name, id: item.id, children });
          }
        });
      }
    });
  }

  fs.writeFileSync("./payload.json", JSON.stringify(result, null, 2));
  files.forEach(({ name, lines }) =>
    fs.writeFileSync(`./${name}.figma.tsx.txt`, lines.join("\n\n")),
  );
}

function traverseChildren(children, agg) {
  children.forEach((child) => {
    if (["INSTANCE", "COMPONENT"].includes(child.type)) {
      if (!agg.includes(child.name)) {
        agg.push(child.name);
      }
    } else if ("children" in child) {
      traverseChildren(child.children, agg);
    }
  });
}

async function run() {
  const data = await getFileData(FILE_KEY, "Blocks");
}

run();
