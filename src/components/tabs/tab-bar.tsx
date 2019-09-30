import { AppBar } from "@material-ui/core";
import styled from "styled-components";
import { color } from "../../theme";
import { zIndex } from "../../constants/z-index";

export const TabBar = styled(AppBar)`
  && {
    width: auto;
    background-color: ${color.panelBackground};
    color: ${color.palette.black};
    font-weight: bold;
    z-index: ${zIndex.bodyContent}
  }
`