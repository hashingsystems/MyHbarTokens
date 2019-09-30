import * as React from "react"
import { SnackbarContent } from "../../components/snack-bar/snack-bar-content";
import { IComponentBusinessStoreStateProps, IComponentBusinessStoreDispatchProps, IComponentBusinessOwnProps, mapStateToProps, mapDispatchToProps } from "./onboarding-setup.props";
import { StoreRootState } from "../../app-redux-store/root/root-reducer";
import { connect } from "react-redux";
import { SnackBarContainer } from "./onboarding-setup.style"

class AppOnboardingSetupModalSelf extends React.Component {
  render() {
    return null
  }
}

  export const AppSnackBar = connect<IComponentBusinessStoreStateProps, IComponentBusinessStoreDispatchProps, IComponentBusinessOwnProps, StoreRootState>(
    mapStateToProps,
    mapDispatchToProps
  )(AppOnboardingSetupModalSelf)