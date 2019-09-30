import { StoreRootState } from "../../../app-redux-store/root/root-reducer";
import { RouteComponentProps } from "react-router";
import { Dispatch } from "redux";
import { IActionPageWalletMain } from "./page-redux-store/page-action.types";
import { IActionAppSnackBar } from "../../../components-business/app-snack-bar";
// Interfaces
export interface IPageStoreStateProps {
}

export interface IPageStoreStateProps {
  selectedTokens: string[]
}

export interface IPageOwnProps {
}

export interface IPageStoreDispatchProps {
  showModalSelectTokens(): void,
  updateSelectedToken(tokenIDs: string[]): void,
  showAddTokensModal(): void

}

export type IPageWalletMainProps = IPageOwnProps & IPageStoreStateProps & IPageStoreDispatchProps & RouteComponentProps

//Mappers
export const mapStateToProps = (state: StoreRootState, ownProps: IPageOwnProps): IPageStoreStateProps => ({
  selectedTokens: state.pages.walletMain.selectedTokenIds
})

export const mapDispatchToProps = (dispatch: Dispatch<IActionPageWalletMain | IActionAppSnackBar>, ownProps: IPageOwnProps): IPageStoreDispatchProps => ({
  showAddTokensModal: () => { dispatch({ type: "WALLET_MAIN_PAGE_UPDATE_MODAL_ADD_TOKENS_VISIBILITY", visible: true }) },
  showModalSelectTokens: () => { dispatch({ type: "WALLET_MAIN_PAGE_UPDATE_MODAL_SELECT_TOKENS", visible: true }) },
  updateSelectedToken: (tokenIDs: string[]) => { dispatch({ type: "WALLET_MAIN_PAGE_UPDATE_SELECTED_TOKEN_IDS", ids: tokenIDs }) }
})
