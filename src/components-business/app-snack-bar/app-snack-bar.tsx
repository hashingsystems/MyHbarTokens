import * as React from "react"
import { SnackbarContent } from "../../components/snack-bar/snack-bar-content";
import { IAppSnackBarProps, IComponentBusinessStoreStateProps, IComponentBusinessStoreDispatchProps, IComponentBusinessOwnProps, mapStateToProps, mapDispatchToProps } from "./app-snack-bar.props";
import { StoreRootState } from "../../app-redux-store/root/root-reducer";
import { connect } from "react-redux";
import { SnackBarContainer } from "./app-snack-bar.style"

const AppSnackBarPureComponent = (props: IAppSnackBarProps) => (
  <SnackBarContainer
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    open={props.visible}
    autoHideDuration={15000}
    onClose={() => { props.hide() }}
  >
    <SnackbarContent type={props.type} message={props.message} onClose={() => { props.hide() }}/>
  </SnackBarContainer>
)

export const AppSnackBar = connect<IComponentBusinessStoreStateProps, IComponentBusinessStoreDispatchProps, IComponentBusinessOwnProps, StoreRootState>(
  mapStateToProps,
  mapDispatchToProps
)(AppSnackBarPureComponent)