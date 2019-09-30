import React from "react"
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { TextFieldProps } from '@material-ui/core/TextField';
import { FONT_PRIMARY, FONT_SIZE_MEDIUM } from "../../../constants";
import { color } from "../../../theme";

export const TextInputOutline = styled(( props: (TextFieldProps & {customProps?: any})) => {
  const { variant, InputProps, ...otherProps } = props
  return (
      <TextField
        variant="outlined"
        InputProps={{ 
          classes: {
            input: "input",
            notchedOutline: "notched-outline",
          },
          ...InputProps
        }}
        {...otherProps}
      />
    )
  })`

  && {
    border-radius: 10px;
    border: 1px ${color.palette.brownLight} solid;
  }

  & .input {
    ${FONT_PRIMARY}
    ${FONT_SIZE_MEDIUM}
    color: ${color.palette.black}
    border: none;
    padding: 10px 15px 10px 15px;
    font-weight: bold;
  }

  & .notched-outline {
    border: none;
  }
`