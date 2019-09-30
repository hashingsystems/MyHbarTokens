import styled from "styled-components";
import { color } from "../../theme";
import { COLUMN } from "../../constants";

export const TabContainer = styled.div`
  padding-top: 10px;
  border: 1px ${color.borderPrimary} solid;
  min-height: 500px;
  ${COLUMN};
  align-items: center;
`