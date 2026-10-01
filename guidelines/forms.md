# Forms

- Wrap fields in `<Form>`. Use `<Form singleLine>` for one input + button on a row (newsletter, search).
- Prefer the `*Field` components: they include label, description and error. Use bare `Input`/`Select` only with an `aria-label`.

| Need | Component |
|---|---|
| Text, email, password | `InputField label="Email" type="email" description? errorMessage?` |
| Multi-line | `TextareaField` |
| Pick one from a list | `SelectField label` with `<SelectItem>` children |
| Pick one, few options visible | `RadioGroup` + `RadioField` |
| Pick many | `CheckboxGroup` + `CheckboxField` |
| On/off setting | `SwitchField` |
| Number in a range | `SliderField` |
| Search | `Search` |

- Group related fields with `Fieldset` + `Legend`.
- Show errors through `errorMessage` / `isInvalid`, not custom red text.
- End every form with a `ButtonGroup` (primary submit last).
