import * as React from "react"
import styled from "styled-components";
import { IconProps, icons } from "./icon.props";

export const Icon = styled((props: React.ImgHTMLAttributes<HTMLImageElement> & IconProps) => {
  const { iconType, ...otherProps } = props
  return (
    <img src={icons[props.iconType]} {...otherProps} />
  )
})`
  cursor: ${props => props.onClick ? "pointer" : "normal"}
`
