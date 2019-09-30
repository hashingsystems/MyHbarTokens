import { StoreRootState } from "../../../../../app-redux-store/root/root-reducer";
import { Dispatch } from "redux";
import { IActionPageWalletMain } from "../../page-redux-store/page-action.types";

export interface ISectionOwnProps { }

export interface ISectionStoreStateProps {
  balances: string,
  selectedTokenIds: string[]
}

export interface ISectionStoreDispatchProps {
  showSendTokensModal(): void,
  showAddTokensModal(): void,

  updateSendTokensData(token: string, source: string): void,
  updateBalancesValues(values: string): void,
  updateSelectedToken(tokenIDs: string[]): void


}

export type ISectionTokenTableProps = ISectionOwnProps & ISectionStoreStateProps & ISectionStoreDispatchProps

// Mappers
export const mapStateToProps = (state: StoreRootState, ownProps: ISectionOwnProps): ISectionStoreStateProps => ({
  balances: state.pages.walletMain.balances.values,
  selectedTokenIds: state.pages.walletMain.selectedTokenIds
})

export const mapDispatchToProps = (dispatch: Dispatch<IActionPageWalletMain>, ownProps: ISectionOwnProps): ISectionStoreDispatchProps => ({
  showSendTokensModal: () => { dispatch({ type: "WALLET_MAIN_PAGE_UPDATE_MODAL_SEND_TOKENS_VISIBILITY", visible: true }) },
  showAddTokensModal: () => { dispatch({ type: "WALLET_MAIN_PAGE_UPDATE_MODAL_ADD_TOKENS_VISIBILITY", visible: true }) },
  updateSendTokensData: (token: string, source: string) => {
    dispatch({
      type: "WALLET_MAIN_PAGE_UPDATE_MODAL_SEND_TOKENS_DATA",
      token: token,
      source: source
    })
  },
  updateSelectedToken: (tokenIDs: string[]) => { dispatch({ type: "WALLET_MAIN_PAGE_UPDATE_SELECTED_TOKEN_IDS", ids: tokenIDs }) },
  updateBalancesValues: (values: string) => { dispatch({ type: "WALLET_MAIN_PAGE_UPDATE_UPDATE_BALANCES", values }) }
})