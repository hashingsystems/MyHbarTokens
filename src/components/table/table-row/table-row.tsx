import styled from "styled-components";
import { TableRow as MaterialUITableRow } from "@material-ui/core";
import { ROW } from "../../../constants";

export const TableRow = styled(MaterialUITableRow)`
  && {
    ${ROW}
    align-items: center;
    min-height: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`