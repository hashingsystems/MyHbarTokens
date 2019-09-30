import React from "react"
import { Tab as MaterialUITab } from "@material-ui/core";
import styled from "styled-components";
import { FONT_SIZE_SEMI_MEDIUM, FONT_PRIMARY } from "../../constants";

export const TabBarItem = styled(({...otherProps}) => (
  <MaterialUITab
    classes={{
      labelContainer: "labelContainer", wrapper: "wrapper" }} 
      {...otherProps}
    />))`
    
    && {
      min-height: 41px;
      height: 41px;
    }

    & .labelContainer {
      text-align: center;
      ${FONT_SIZE_SEMI_MEDIUM};
      ${FONT_PRIMARY}
      color: ${props => props.theme.textPrimary};
      text-transform: none;
      font-weight: bold;
    }
  `