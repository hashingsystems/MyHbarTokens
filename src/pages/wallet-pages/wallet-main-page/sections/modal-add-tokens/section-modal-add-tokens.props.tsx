import { StoreRootState } from "../../../../../app-redux-store/root/root-reducer";
import { Dispatch } from "redux";
import { IActionPageWalletMain } from "../../page-redux-store/page-action.types";
import { IActionAppSnackBar } from "../../../../../components-business/app-snack-bar";

export interface ISectionOwnProps { }

export interface ISectionStoreStateProps {
  visible: boolean,
}

export interface ISectionStoreDispatchProps {
  hideAddTokensModal(): void,
  updateSelectedToken(tokenIDs: string[]): void

}

export type ISectionModalsProps = ISectionOwnProps & ISectionStoreStateProps & ISectionStoreDispatchProps

// Mappers
export const mapStateToProps = (state: StoreRootState, ownProps: ISectionOwnProps): ISectionStoreStateProps => ({
  visible: state.pages.walletMain.addTokensModal.visible,
})

export const mapDispatchToProps = (dispatch: Dispatch<IActionPageWalletMain | IActionAppSnackBar>, ownProps: ISectionOwnProps): ISectionStoreDispatchProps => ({
  hideAddTokensModal: () => { dispatch({ type: "WALLET_MAIN_PAGE_UPDATE_MODAL_ADD_TOKENS_VISIBILITY", visible: false }) },
  updateSelectedToken: (tokenIDs: string[]) => { dispatch({ type: "WALLET_MAIN_PAGE_UPDATE_SELECTED_TOKEN_IDS", ids: tokenIDs }) },
})
