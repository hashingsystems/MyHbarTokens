import React from "react"
import styled from "styled-components"
import { color } from "../../../theme/color";

export interface TextInputProps {
  className: string,
  placeHolder: string,
  onTextChanged?(text: string): void
}

const StyledInput = styled.input`
  border-width: 1px;
  border-style: solid;
  border-color: ${color.palette.brownLight}
  padding-left: 10px;
  padding-right: 2px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 15px;
  color: black;
  border-radius: 3px;
  min-width: 30px;
`

export const TextInputPrimary = (props: TextInputProps) => {
  return (
    <StyledInput
      className={props.className}
      onChange={(event) => { props.onTextChanged && props.onTextChanged(event.target.value) }} type="text" placeholder={props.placeHolder}
    />
  )
}