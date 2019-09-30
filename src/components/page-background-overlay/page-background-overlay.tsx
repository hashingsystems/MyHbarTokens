import * as React from "react"
import styled from "styled-components";
import { Column } from "../direction";
import { zIndex } from "../../constants/z-index";

const PageBackgroundOverlayContainer = styled(Column)`
  && {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 90px;
    align-self: stretch;
    display: flex;
    z-index: ${zIndex.PAGE_BACKGROUND_OVERLAY}
  }
`

const OverlayImage = styled.img`
  height: 50vh;
  align-self: flex-start;
  margin-bottom: 0;
`
export const PageBackgroundOverlay = () => {
  return (
    <PageBackgroundOverlayContainer className="page-background-overlay">
      <OverlayImage src="images/page-overlay-background.png" />
    </PageBackgroundOverlayContainer>
  )
}