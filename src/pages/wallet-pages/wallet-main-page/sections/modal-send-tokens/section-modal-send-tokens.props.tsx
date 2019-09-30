import { StoreRootState } from "../../../../../app-redux-store/root/root-reducer";
import { Dispatch } from "redux";
import { IActionPageWalletMain } from "../../page-redux-store/page-action.types";
import { IActionAppSnackBar } from "../../../../../components-business/app-snack-bar";

export interface ISectionOwnProps { }

export interface ISectionStoreStateProps {
  visible: boolean,
  token: string,
  source: string
}

export interface ISectionStoreDispatchProps {
  hideSendTokensModal(): void,
  showAppSnackBar(): void
}

export type ISectionModalsProps = ISectionOwnProps & ISectionStoreStateProps & ISectionStoreDispatchProps

// Mappers
export const mapStateToProps = (state: StoreRootState, ownProps: ISectionOwnProps): ISectionStoreStateProps  => ({
  visible: state.pages.walletMain.sendTokensModal.visible,
  token: state.pages.walletMain.sendTokensModal.token,
  source: state.pages.walletMain.sendTokensModal.source
})

export const mapDispatchToProps = (dispatch: Dispatch<IActionPageWalletMain | IActionAppSnackBar>, ownProps: ISectionOwnProps): ISectionStoreDispatchProps => ({
  hideSendTokensModal: () => { dispatch({ type: "WALLET_MAIN_PAGE_UPDATE_MODAL_SEND_TOKENS_VISIBILITY", visible: false }) },
  showAppSnackBar: () => { dispatch({ type: "APP_SNACK_BAR_SHOW", message: "Transaction has been created successfully.", messageType: "success" }) }
})