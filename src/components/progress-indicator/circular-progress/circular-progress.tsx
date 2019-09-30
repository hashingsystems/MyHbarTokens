import React from "react"
import { CircularProgressProps } from "@material-ui/core/CircularProgress";
import { StyledProgressIndicator } from "./circular-progress.style";

export const CircularProgress = (props: CircularProgressProps & { visible: boolean }) => {
  const { visible, ...otherProps } = props
  if (props.visible) {
    return <StyledProgressIndicator {...otherProps} />
  } else return null
}