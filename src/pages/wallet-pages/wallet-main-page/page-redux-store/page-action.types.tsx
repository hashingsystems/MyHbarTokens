import { IDataItemModel } from "../../../../models/data-item";

export interface IActionUpdateModalSendTokenVisibility {
  type: 'WALLET_MAIN_PAGE_UPDATE_MODAL_SEND_TOKENS_VISIBILITY',
  visible: boolean
}

export interface IActionUpdateModalAddTokenVisibility {
  type: 'WALLET_MAIN_PAGE_UPDATE_MODAL_ADD_TOKENS_VISIBILITY',
  visible: boolean
}

export interface IActionUpdateModalSendTokenData {
  type: 'WALLET_MAIN_PAGE_UPDATE_MODAL_SEND_TOKENS_DATA',
  token: string,
  source: string
}

export interface IActionUpdateBalances {
  type: 'WALLET_MAIN_PAGE_UPDATE_UPDATE_BALANCES',
  loading?: boolean,
  values?: string
}

export interface IActionUpdateModalSelectTokens {
  type: 'WALLET_MAIN_PAGE_UPDATE_MODAL_SELECT_TOKENS',
  visible: boolean
}

export interface IActionUpdateSelectedTokenIds {
  type: 'WALLET_MAIN_PAGE_UPDATE_SELECTED_TOKEN_IDS',
  ids: string[]
}

export type IActionPageWalletMain = IActionUpdateModalSendTokenVisibility|IActionUpdateModalAddTokenVisibility | IActionUpdateModalSendTokenData |
  IActionUpdateBalances | IActionUpdateModalSelectTokens | IActionUpdateSelectedTokenIds