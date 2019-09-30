import React from "react"
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { TextFieldProps } from '@material-ui/core/TextField';
import { FONT_PRIMARY, FONT_SIZE_MEDIUM } from "../../../constants";

export const TextInputUnderline = styled(( props: (TextFieldProps & {customProps?: any})) => {
  const { variant, InputProps, ...otherProps } = props
  return (
      <TextField variant="standard"
        InputProps={{ 
          classes: {
            input: "input"
          }
        }}
        {...otherProps}
      />
    )
  })`

  & .input {
    ${FONT_PRIMARY}
    ${FONT_SIZE_MEDIUM}
  }
`