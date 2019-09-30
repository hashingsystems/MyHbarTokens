import styled from "styled-components";
import { TableRow } from "./table-row";
import { color } from "../../../theme";

export const TableRowHeader = styled(TableRow)`
  && {
    border-bottom: 1px ${color.borderPrimary} solid;
  }
`