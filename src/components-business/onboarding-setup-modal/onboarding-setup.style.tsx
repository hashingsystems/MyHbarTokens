import * as React from "react"
import { Snackbar as MuiSnackBar } from "@material-ui/core";
import styled from "styled-components";
import { SnackbarProps } from "@material-ui/core/Snackbar";

export const SnackBarContainer = styled((props: SnackbarProps) => {
  const { classes, ...otherProps } = props
  return (
    <MuiSnackBar
      {...otherProps}
      classes={{
        root: "snack-bar-root"
      }}
    />
  )
})`

  && {
    margin-top: 20px;
  }
`