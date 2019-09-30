import styled from "styled-components";
import { Row, Column } from "../../../../../components/direction";
import { color } from "../../../../../theme";
import { LabelMedium } from "../../../../../components/label";
import { Icon } from "../../../../../components/icon";

export const ButtonContainer = styled(Row)`
  min-width: 250px;
  min-height: 35px;
  border: 1px ${color.palette.greenLight} solid;
  border-radius: 5px;
`

export const ButtonText = styled(LabelMedium)`
  margin-left: 15px;
  margin-top: auto;
  margin-bottom: auto;
  flex: 1;

  :hover {
    cursor: pointer;
  }
`

export const ActionItem = styled(Row)`
  width: 41px;
  border-left: 1px ${color.palette.greenLight} solid;
  justify-content: center;
  align-items: center;
`

export const CheckBalanceIcon = styled(Icon)`
  && {
    animation: rotation 2s linear infinite 
  }
`

export const UpdateRatesIcon = styled(Icon)`
  && {
    animation: rotation 2s linear infinite 
  }
`