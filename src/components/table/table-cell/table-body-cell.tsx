import { TableCell as MaterialUITableCell } from "@material-ui/core";
import styled from "styled-components";
import { COLUMN, ROW, FONT_SIZE_MEDIUM, FONT_PRIMARY } from "../../../constants";

export const TableBodyCell = styled(MaterialUITableCell)`
  && {
    ${ROW}
    ${FONT_SIZE_MEDIUM}
    ${FONT_PRIMARY}
    min-width: 80px;
    border: none;
    padding: 0;
    margin-left: 15px;
    margin-right: 15px;
  }
`