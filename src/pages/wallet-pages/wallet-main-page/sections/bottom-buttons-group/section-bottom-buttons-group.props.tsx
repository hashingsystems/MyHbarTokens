import { StoreRootState } from "../../../../../app-redux-store/root/root-reducer";
import { Dispatch } from "redux";
import { IActionPageWalletMain } from "../../page-redux-store/page-action.types";

export interface ISectionOwnProps { }

export interface ISectionStoreStateProps {
  checkingBalancesProgressIndicatorVisible: boolean
}

export interface ISectionStoreDispatchProps {
  updateBalancesValues(values: string): void,
  showBalancesProgressIndicator(): void,
  hideBalancesProgressIndicator(): void
}

export type ISectionBottomButtonsGroupProps = ISectionOwnProps & ISectionStoreStateProps & ISectionStoreDispatchProps

// Mappers
export const mapStateToProps = (state: StoreRootState, ownProps: ISectionOwnProps): ISectionStoreStateProps  => ({
  checkingBalancesProgressIndicatorVisible: state.pages.walletMain.balances.loading
})

export const mapDispatchToProps = (dispatch: Dispatch<IActionPageWalletMain>, ownProps: ISectionOwnProps): ISectionStoreDispatchProps => ({
  updateBalancesValues: (values: string) => { dispatch({ type: "WALLET_MAIN_PAGE_UPDATE_UPDATE_BALANCES", values }) },
  showBalancesProgressIndicator: () => { dispatch({ type: "WALLET_MAIN_PAGE_UPDATE_UPDATE_BALANCES", loading: true }) },
  hideBalancesProgressIndicator: () => { dispatch({ type: "WALLET_MAIN_PAGE_UPDATE_UPDATE_BALANCES", loading: false }) }
})