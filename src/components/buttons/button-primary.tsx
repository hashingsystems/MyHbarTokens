import * as React from "react"
import styled from "styled-components";
import Button, { ButtonProps } from "@material-ui/core/Button";
import { color } from "../../theme";
import { FONT_SIZE_LARGE } from "../../constants";

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  .root {
    text-transform: none;
    background-color: ${color.palette.greenLight};
    min-width: 150px;
    min-height: 45px;
    border-radius: 8px;
  }

  .text {
    color: ${color.palette.white};
    font-family: inherit;
    font-size: ${FONT_SIZE_LARGE}
  }  

  & .root:hover {
    background-color: ${color.palette.greenLight};
  }
`

export const ButtonPrimary = (props: ButtonProps) => {
  const { className, classes, ...otherProps } = props
  return (
    <ButtonWrapper className={props.className}>
      <Button classes={{
        root: "root",
        text: "text"
      }} {...otherProps}>
        {props.children}
      </Button>
    </ButtonWrapper>
  )
}