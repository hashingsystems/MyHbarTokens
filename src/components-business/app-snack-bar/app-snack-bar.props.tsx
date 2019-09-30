import { StoreRootState } from "../../app-redux-store/root/root-reducer";
import { ISnackBarType } from "../../components/snack-bar/snack-bar-content";
import { Dispatch } from "redux";
import { IActionAppSnackBar } from "./redux-store";

export interface IComponentBusinessOwnProps {
} 

export interface IComponentBusinessStoreStateProps {
  visible: boolean,
  type: ISnackBarType,
  message: string
}

export interface IComponentBusinessStoreDispatchProps {
  hide(): void
}

export type IAppSnackBarProps = IComponentBusinessOwnProps & IComponentBusinessStoreStateProps & IComponentBusinessStoreDispatchProps

// Mappers
export const mapStateToProps = (state: StoreRootState, ownProps: IComponentBusinessOwnProps): IComponentBusinessStoreStateProps => ({
  visible: state.componentsBusiness.appSnackBar.visible,
  type: state.componentsBusiness.appSnackBar.type,
  message: state.componentsBusiness.appSnackBar.message
})

export const mapDispatchToProps = (dispatch: Dispatch<IActionAppSnackBar>, ownProps: IComponentBusinessOwnProps): IComponentBusinessStoreDispatchProps => ({
  hide: () => { dispatch({ type: "APP_SNACK_BAR_HIDE" }) }
})