import styled from "styled-components";
import { ROW, COLUMN } from "../../../constants";
import { color } from "../../../theme/color";
import { TextInputPrimary } from "../../text-input/text-input-primary";

export const SearchInputWrapper = styled.div`
  ${ROW}
`

export const StyledTextInput = styled(TextInputPrimary)`
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
`

export const SearchButton = styled.div`
  ${COLUMN}
  background-color: ${color.palette.grey};
  justify-content: center;
  align-items: center;
  border: 1px solid ${color.palette.brownLight};
  border-left: 0px;
  border-radius: 3px
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
  padding-left: 5px;
  padding-right: 5px;
  cursor: pointer;
`