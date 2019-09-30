import { IActionPageWalletMain } from "./page-action.types";

interface IPageWalletMainState {
  sendTokensModal: {
    visible: boolean,
    token: string,
    source: string
  },
  addTokensModal: {
    visible: boolean
  },
  balances: {
    values: string,
    loading: boolean
  },
  selectTokensModal: {
    visible: boolean
  },
  selectedTokenIds: string[],
}

export const initialState: IPageWalletMainState = {
  sendTokensModal: {
    visible: false,
    token: "",
    source: ""
  },
  addTokensModal: {
    visible: false
  },
  balances: {
    values: "n/a",
    loading: false
  },
  selectTokensModal: {
    visible: false
  },
  selectedTokenIds: [] as string[],
}

export const pageWalletMainReducer = (state = initialState, action: IActionPageWalletMain): IPageWalletMainState => {
  switch (action.type) {
    case "WALLET_MAIN_PAGE_UPDATE_MODAL_SEND_TOKENS_VISIBILITY":
      return {
        ...state,
        sendTokensModal: {
          ...state.sendTokensModal,
          visible: action.visible
        }
      }
    case "WALLET_MAIN_PAGE_UPDATE_MODAL_ADD_TOKENS_VISIBILITY":
      return {
        ...state,
        addTokensModal: {
          ...state.addTokensModal,
          visible: action.visible
        }
      }
    case "WALLET_MAIN_PAGE_UPDATE_MODAL_SEND_TOKENS_DATA":
      return {
        ...state,
        sendTokensModal: {
          ...state.sendTokensModal,
          token: action.token,
          source: action.source
        }
      }
    case "WALLET_MAIN_PAGE_UPDATE_UPDATE_BALANCES":
      return {
        ...state,
        balances: {
          ...state.balances,
          loading: action.loading !== undefined ? action.loading : state.balances.loading,
          values: action.values ? action.values : state.balances.values
        }
      }
    case "WALLET_MAIN_PAGE_UPDATE_MODAL_SELECT_TOKENS":
      return {
        ...state,
        selectTokensModal: {
          ...state.selectTokensModal,
          visible: action.visible
        }
      }
    case "WALLET_MAIN_PAGE_UPDATE_SELECTED_TOKEN_IDS":
      return {
        ...state,
        selectedTokenIds: action.ids
      }
    default:
      return state
  }
}