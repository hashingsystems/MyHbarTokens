import * as React from "react"
import { SearchInputWrapper, SearchButton, StyledTextInput } from ".";
import { IoIosSearch } from "react-icons/io";

export const SearchInputClassic = () => (
  <SearchInputWrapper>
    <StyledTextInput
      className="search-input-text-input"
      placeHolder="Search..."
      onTextChanged={() => {}}
    />
    <SearchButton>
      <IoIosSearch size={20} />
    </SearchButton>
  </SearchInputWrapper>
)