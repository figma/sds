import { IconButton, Input, Label, ListBox, ListBoxItem } from "components";
import { IconSearch, IconX } from "icons";
import React, { useRef, useState } from "react";
import {
  ComboBox as RACComboBox,
  Popover as RACPopover,
  type InputProps as RACInputProps,
} from "react-aria-components";
import css from "./Search.module.css";

export type SearchProps = Omit<RACInputProps, "results"> & {
  results?: string[];
  onSearch?: (search: string) => void;
  clearLabel?: string;
};

export const Search = React.forwardRef(function Search(
  {
    results,
    onSearch,
    clearLabel = "Clear search",
    ...props
  }: SearchProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const onInputInput = (search: string) => {
    setSearchTerm(search);
    if (onSearch) {
      onSearch(search);
    }
  };

  return (
    <RACComboBox className={css.root}>
      <Label hidden>{props["aria-label"] || "Search"}</Label>
      <Input
        type="search"
        className={css.input}
        value={searchTerm}
        onInput={(e) => onInputInput(e.currentTarget.value)}
        ref={(node) => {
          inputRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        {...props}
      />
      <span className={css.icon}>
        {searchTerm ? (
          <IconButton
            aria-label={clearLabel}
            onPress={() => onInputInput("")}
            size="small"
            variant="subtle"
          >
            <IconX />
          </IconButton>
        ) : (
          <IconButton
            aria-label={props["aria-label"] || "Search"}
            onPress={() => inputRef?.current?.focus()}
            size="small"
            variant="subtle"
          >
            <IconSearch />
          </IconButton>
        )}
      </span>
      <RACPopover>
        <ListBox>
          {results?.map((a) => (
            <ListBoxItem key={a} onAction={() => onInputInput(a)}>
              {a}
            </ListBoxItem>
          ))}
        </ListBox>
      </RACPopover>
    </RACComboBox>
  );
});
