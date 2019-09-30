import * as React from "react"
import { CircularProgress } from "@material-ui/core";
import styled from "styled-components";
import { CircularProgressProps } from "@material-ui/core/CircularProgress";
import { color } from "../../../theme/color";

export const StyledProgressIndicator = styled((props: CircularProgressProps) => {
  return <CircularProgress
    color="primary"
    classes={{
      colorPrimary: "colorPrimary"
    }}
    {...props}
  />
})`
  && {
    color: ${color.palette.white};
  }
`