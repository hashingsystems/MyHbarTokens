import * as React from "react"
import styled from "styled-components";
import Button, { ButtonProps } from "@material-ui/core/Button";
import { color } from "../../theme";
import { FONT_SIZE_LARGE } from "../../constants";

const ButtonWrapper = styled.div`
  .root {
    text-transform: none;
    background-color: ${color.palette.white};
    min-width: 250px;
    min-height: 45px;
    border: 1px ${color.palette.greenLight} solid;
    border-radius: 8px;
  }

  .text {
    color: ${color.palette.black};
    font-family: inherit;
    font-size: ${FONT_SIZE_LARGE}
  }

  & .root:hover {
    background-color: transparent;
  }
`

export const ButtonDefault = styled((props: ButtonProps) => {
  const { classes, ...otherProps } = props
  return (
    <ButtonWrapper>
      <Button classes={{
        root: "root",
        text: "text"
      }} {...otherProps}>
        {props.children}
      </Button>
    </ButtonWrapper>
  )
})``