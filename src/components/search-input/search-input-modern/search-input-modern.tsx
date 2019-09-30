import * as React from "react"
import { SearchInputWrapper, SearchButton, SearchTextInput } from ".";
import { IoIosSearch } from "react-icons/io";

export interface SearchInputModernProps {
  className: string,
  placeHolder?: string
}

export const SearchInputModern = (props: SearchInputModernProps) => (
  <SearchInputWrapper className={props.className}>
    <SearchButton>
      <IoIosSearch size={20} />
    </SearchButton>
    <SearchTextInput
      className="search-input-text-input"
      placeHolder={ props.placeHolder ? props.placeHolder : "" }
      onTextChanged={() => {}}
    />
  </SearchInputWrapper>
)