import { TableCell as MaterialUITableCell } from "@material-ui/core";
import styled from "styled-components";
import { color } from "../../../theme";
import { COLUMN, FONT_PRIMARY, FONT_SIZE_MEDIUM, ROW } from "../../../constants";

export const TableHeaderCell = styled(MaterialUITableCell)`
  && {
    ${ROW}
    ${FONT_SIZE_MEDIUM}
    font-weight: bold;
    color: ${color.palette.black};
    border: none;
    padding: 0;
    min-width: 80px;
    margin-left: 15px;
    margin-right: 15px;
    ${FONT_PRIMARY};
    align-items: center;
  }
`