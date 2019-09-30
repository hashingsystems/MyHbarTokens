import styled from "styled-components";
import { Column, Row } from "../../../../../components/direction";
import { color } from "../../../../../theme";
import { LabelLarger, LabelMedium, LabelLarge } from "../../../../../components/label";
import { zIndex } from "../../../../../constants/z-index";
import { Switch } from "@material-ui/core";

export const ModalFrame = styled(Column)`
  min-height: 300px;
  min-width: 528px;
  max-width: 650px;
  border-radius: 20px;
  align-self: center;
  background-color: ${color.palette.white}
  z-index: ${zIndex.PAGE_MODAL};
`

export const ModalHeader = styled(Row)`
  background-image: linear-gradient(to right, #66d1ae, #60c8b6);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  min-height: 50px;
  padding-left: 15px;
  padding-right: 15px;
`

export const ModalTitle = styled(LabelLarger)`
  margin-left: auto;
  margin-right: auto;
  color: ${color.palette.white}
`

export const ModalBody = styled(Column)`
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 15px;
`

export const FormSendToken = styled(Column)`
  margin-left: 150px;
  margin-right: 150px;
  align-self: stretch;
  align-items: center;
`

export const FormLabel = styled(LabelMedium)`
`

export const ResetButton = styled(LabelLarge)`
  :hover {
    cursor: pointer;
  }

  text-decoration: underline;
`

export const SelectTokenSwitch = styled(Switch)`
  && {
    margin-left: auto;
  }
`