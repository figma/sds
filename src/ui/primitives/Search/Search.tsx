import { clsx } from "clsx";
import { IconSearch, IconX } from "icons";
import React, { useRef, useState } from "react";
import {
  Popover as RACPopover,
  type InputProps as RACInputProps,
} from "react-aria-components";
import { IconButton } from "../IconButton/IconButton";
import { Input } from "../Input/Input";
import { ListBox, ListBoxItem } from "../ListBox/ListBox";
import "./search.css";

export type SearchProps = RACInputProps & {
  results?: string[];
};
export const Search = React.forwardRef(function Search(
  { className, results, ...props }: SearchProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const classNames = clsx(className, "search-input-container");

  return (
    <div className={classNames}>
      <Input
        type="search"
        className="search-input"
        value={searchTerm}
        onInput={(e) => setSearchTerm(e.currentTarget.value)}
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
      <span className="search-icon">
        {searchTerm ? (
          <IconButton
            aria-label="Clear search"
            onPress={() => setSearchTerm("")}
            size="small"
            variant="subtle"
          >
            <IconX />
          </IconButton>
        ) : (
          <IconButton
            aria-label="Clear search"
            onPress={() => inputRef?.current?.focus()}
            size="small"
            variant="subtle"
          >
            <IconSearch />
          </IconButton>
        )}
      </span>
      {results && (
        <RACPopover>
          <ListBox>
            {results.map((a) => (
              <ListBoxItem onAction={() => setSearchTerm(a)}>{a}</ListBoxItem>
            ))}
          </ListBox>
        </RACPopover>
      )}
    </div>
  );
});
