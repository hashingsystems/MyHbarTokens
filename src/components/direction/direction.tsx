import styled from "styled-components";
import { ROW, COLUMN, FULL } from "../../constants";

export const Row = styled.div`
  ${ROW}
  align-self: stretch;
  align-items: center;
`

export const Column = styled.div`
  ${COLUMN}
  align-self: stretch;
`

export const FlexContainer = styled.div`
  display: flex;
`