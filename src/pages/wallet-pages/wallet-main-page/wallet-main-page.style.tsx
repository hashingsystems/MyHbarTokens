import styled from "styled-components";
import { Page } from "../../page";
import { Row, Column } from "../../../components/direction";
import { color } from "../../../theme";
import { ButtonPrimary } from "../../../components/buttons/button-primary";
import { zIndex } from "../../../constants/z-index";

export const PageWrapper = styled(Page)`
  background-color: ${props => props.theme.backgroundPrimary};
  margin-left: auto;
  margin-right: auto;
  position: relative;
`

export const PageBody = styled(Column)`
  flex: 1;
  align-self: stretch;
  position: relative;
  z-index: ${zIndex.PAGE_BODY}
`

export const WalletButtonsGroupWrapper = styled(Row)`
  && {
    align-self: center;
    margin-top: 65px;
  }
`

export const HorizontalLine = styled(Row)`
  && {
    height: 1px;
    align-self: center;
    background-color: ${color.palette.brownLight};
    width: 80%;
  }
`

export const ButtonSelectToken = styled(ButtonPrimary)`
  && {
    align-self: center;
    margin-top: auto;
    margin-bottom: auto;
    min-width: 280px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`