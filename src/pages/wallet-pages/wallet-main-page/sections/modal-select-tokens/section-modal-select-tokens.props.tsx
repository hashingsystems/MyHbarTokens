import { StoreRootState } from "../../../../../app-redux-store/root/root-reducer";
import { Dispatch } from "redux";
import { IActionPageWalletMain } from "../../page-redux-store/page-action.types";
import { IActionAppSnackBar } from "../../../../../components-business/app-snack-bar";

export interface ISectionOwnProps { }

export interface ISectionStoreStateProps {
  visible: boolean,
  selectedTokens: string[]
}

export interface ISectionStoreDispatchProps {
  hideSelectTokensModal(): void,
  showAppSnackBar(): void,
  updateSelectedToken(tokenIDs: string[]): void
}

export type ISectionModalsProps = ISectionOwnProps & ISectionStoreStateProps & ISectionStoreDispatchProps

// Mappers
export const mapStateToProps = (state: StoreRootState, ownProps: ISectionOwnProps): ISectionStoreStateProps  => ({
  visible: state.pages.walletMain.selectTokensModal.visible,
  selectedTokens: state.pages.walletMain.selectedTokenIds
})

export const mapDispatchToProps = (dispatch: Dispatch<IActionPageWalletMain | IActionAppSnackBar>, ownProps: ISectionOwnProps): ISectionStoreDispatchProps => ({
  hideSelectTokensModal: () => { dispatch({ type: "WALLET_MAIN_PAGE_UPDATE_MODAL_SELECT_TOKENS", visible: false }) },
  showAppSnackBar: () => { dispatch({ type: "APP_SNACK_BAR_SHOW", message: "Transaction has been created successfully.", messageType: "success" }) },
  updateSelectedToken: (tokenIDs: string[]) => { dispatch({ type: "WALLET_MAIN_PAGE_UPDATE_SELECTED_TOKEN_IDS", ids: tokenIDs}) }
})