import styled from "styled-components";
import { color } from "../../../theme";
import { zIndex } from "../../../constants/z-index";
import { Column } from "../../direction";

export const ModalContainer = styled(Column)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(228, 248, 255, 0.8);
  display: flex;
  transition: all 0.5s;
  justify-content: center;
  opacity: ${(props: { visible: boolean }) => props.visible ? 1 : 0}
  visibility: ${(props: { visible: boolean }) => props.visible ? 'visible' : 'hidden'}
  z-index: ${zIndex.PAGE_MODAL}
`

export const BackgroundOverlay = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: -30vw;
  height: auto;
`