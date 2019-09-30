import { StoreRootState } from "../app-redux-store/root/root-reducer";
import { IThemeId } from "../theme";

// Interfaces
export interface IAppStoreStateProps {
  currentThemeId: IThemeId,
  currentLanguage: string
}

export interface IAppStoreDispatchProps {
}

export interface IAppOwnProps {
}

export type IAppProps = IAppOwnProps & IAppStoreStateProps & IAppStoreDispatchProps

// Mappers
export const appMapDispatchToProps = (dispatch, ownProps: IAppOwnProps): IAppStoreDispatchProps => ({
})

export const appMapStateToProps = (state: StoreRootState, ownProps: IAppOwnProps): IAppStoreStateProps => ({
  currentThemeId: state.theme.currentTheme,
  currentLanguage: state.locale.currentLocale
})
