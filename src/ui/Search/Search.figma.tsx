import figma from "@figma/code-connect";
import { Search } from "./Search";

figma.connect(Search, "<FIGMA_URL_SEARCH>", {
  props: {
    value: figma.enum("Value Type", {
      Default: figma.string("Value"),
    }),
    placeholder: figma.enum("Value Type", {
      Default: "Placeholder here...",
      Placeholder: figma.string("Value"),
    }),
    isDisabled: figma.enum("State", {
      Disabled: true,
    }),
  },
  example: ({ value, placeholder, isDisabled }) => (
    <Search value={value} placeholder={placeholder} disabled={isDisabled} />
  ),
});
