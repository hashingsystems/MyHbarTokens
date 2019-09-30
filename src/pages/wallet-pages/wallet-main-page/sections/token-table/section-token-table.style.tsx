import { LabelLarge, LabelMedium } from "../../../../../components/label";
import styled, { css } from "styled-components";
import { color } from "../../../../../theme";
import { Row, Column } from "../../../../../components/direction";

export const HeaderRow = styled(Row)`
  && {
    border-bottom: 1px ${color.palette.brownLight} solid;
  }
`
export const BodyRow = styled(Row)`
  && {
    border-bottom: 1px ${color.palette.brownLight} solid;
    align-self: stretch;
  }
`

export const CellBase = css`
  min-height: 35px;
  justify-content: center;
  align-items: center;
`

export const AddressCellBase = css`
  ${CellBase}
  align-self: stretch;
  min-width: 100px;
  width: 25%;
`

export const TokenCellBase = css`
  ${CellBase}
  flex: 1;
  min-width: 60px;
`

export const IconCellBase = css`
  ${CellBase}
  flex: 1;
  min-width: 60px;
`

export const BalanceCellBase = css`
  ${CellBase}
  flex: 1;
  min-width: 60px;
`

export const USDCellBase = css`
  ${CellBase}
  flex: 1;
  min-width: 60px;
`

export const ActionCellBase = css`
  ${CellBase}
  flex: 3;
  min-width: 100px;
`
// Header Cells
export const AddressHeaderCell = styled(LabelMedium)`
  && {  
    ${AddressCellBase}
    border-right: 1px ${color.palette.brownLight} solid;
  }
`

export const TokenHeaderCell = styled(LabelMedium)`
  && {  
    ${TokenCellBase}
    border-right: 1px ${color.palette.brownLight} solid;
  }
`

export const IconHeaderCell = styled(LabelMedium)`
  && {  
    ${IconCellBase}
    border-right: 1px ${color.palette.brownLight} solid;
  }
`

export const BalanceHeaderCell = styled(LabelMedium)`
  && {  
    ${TokenCellBase}
    border-right: 1px ${color.palette.brownLight} solid;
  }
`

export const USDHeaderCell = styled(LabelMedium)`
  && {  
    ${USDCellBase}
    border-right: 1px ${color.palette.brownLight} solid;
  }
`

export const ActionHeaderCell = styled(LabelMedium)`
  && {  
    ${ActionCellBase}
  }
`
// Body Cells
export const AddressBodyColumn = styled(Column)`
  && {
    ${AddressCellBase}
    border-right: 1px ${color.palette.brownLight} solid;
  }
`

export const AddressBodyCell = styled(LabelMedium)`
  && {
    ${AddressCellBase}
    align-items: center;
    justify-content: center;
    min-height: 65px;
    width: 100%;
  }
`

export const IconBodyColumn = styled(Column)`
  && {
    ${IconCellBase}
    border-right: 1px ${color.palette.brownLight} solid;
  }
`

export const IconBodyCell = styled(Column)`
  && {
    align-items: center;
    justify-content: center;
    min-height: 65px;
  }
`
export const TokenBodyColumn = styled(Column)`
  && {
    ${TokenCellBase}
    border-right: 1px ${color.palette.brownLight} solid;
  }
`

export const TokenBodyCell = styled(LabelMedium)`
  && {
    min-height: 65px;
  }
`
export const BalanceBodyColumn = styled(Column)`
  && {
    ${TokenCellBase}
    border-right: 1px ${color.palette.brownLight} solid;
  }
`

export const BalanceBodyCell = styled(LabelMedium)`
  && {
    min-height: 65px;
  }
`
export const USDBodyColumn = styled(Column)`
  && {
    ${USDCellBase}
    border-right: 1px ${color.palette.brownLight} solid;
  }
`

export const USDBodyCell = styled(LabelMedium)`
  && {
    min-height: 65px;
  }
`

export const ActionBodyColumn = styled(Column)`
  && {
    display:flex;
    flex-direction:row;
    justify-content:space-around!important;
    ${ActionCellBase}
  }
`

export const ActionBodyCell = styled(LabelMedium)`
  && {
    min-height: 65px;
    

    color: ${color.palette.greenLight}

    :hover {
      cursor: pointer;
    }
  }
`