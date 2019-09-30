import styled from "styled-components";
import { Page } from "../../page";
import { Row, Column } from "../../../components/direction";

export const LandingPageMainWrapper = styled(Page)`
  background-color: ${props => props.theme.backgroundPrimary};
  margin-left: auto;
  margin-right: auto;
  position: relative;
`

export const PageBody = styled(Column)`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  position: relative;
`

export const WalletButtonsGroupWrapper = styled(Row)`
  && {
    align-self: center;
    margin-top: -72px;
  }
`