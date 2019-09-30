import styled from "styled-components";
import { ROW, COLUMN } from "../../../constants";
import { color } from "../../../theme/color";
import { TextInputPrimary } from "../../text-input/text-input-primary";

export const SearchInputWrapper = styled.div`
  ${ROW}
  border-radius: 3px;
  border: 1px ${color.borderPrimary} solid;

  &:focus-within {
    border: 1px ${color.palette.blueLight} solid;
    transition: border 0.5s
  }
`

export const SearchTextInput = styled(TextInputPrimary)`
  && {
    border-width: 0px;
    background-color: transparent;
    color: ${props => props.theme.textPrimary}
    &:focus {
      outline: none;
    }
  }
`

export const SearchButton = styled.div`
  ${COLUMN}
  justify-content: center;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  cursor: pointer;
`