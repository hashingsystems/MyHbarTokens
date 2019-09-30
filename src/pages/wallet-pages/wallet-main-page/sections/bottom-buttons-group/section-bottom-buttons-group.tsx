import React from "react";
import { ButtonContainer, ButtonText, ActionItem, CheckBalanceIcon } from "./section-bottom-buttons-group.style";
import { connect } from "react-redux";
import { ISectionStoreStateProps, ISectionStoreDispatchProps, ISectionOwnProps, mapStateToProps, mapDispatchToProps, ISectionBottomButtonsGroupProps } from "./section-bottom-buttons-group.props";
import { StoreRootState } from "../../../../../app-redux-store/root/root-reducer";
import { IoMdRefresh } from 'react-icons/io';
import { color } from "../../../../../theme";

class SectionBottomButtonsGroupPureComponent extends React.Component<ISectionBottomButtonsGroupProps> {

  state = {
    accountBalance: null,
    checkingBalancesProgressIndicatorVisible: false
  }

  componentWillMount = async () => {
  }

  componentDidMount = async () => {

  }

  CheckBalanceButton = () => {
    return (
      <ButtonContainer onClick={this._handleClickCheckBalance}>
        <ButtonText>{this.state.accountBalance || `View Account Balance`}</ButtonText>
        <ActionItem>
          {
            this.state.checkingBalancesProgressIndicatorVisible
              ? <CheckBalanceIcon iconType="loading" style={{ width: 20, height: 20 }} />
              : <IoMdRefresh size="25" color={color.palette.greenLight} />
          }
        </ActionItem>
      </ButtonContainer>
    )
  }

  render() {
    return (<div />
      // <Row style={{ marginTop: 45, marginBottom: 45, justifyContent: "center", flexWrap: "wrap" }}>
      //   <this.CheckBalanceButton />
      // </Row>
    )
  }

  _handleClickCheckBalance = async () => {

  }

}

export const SectionBottomButtonsGroup = connect<ISectionStoreStateProps, ISectionStoreDispatchProps, ISectionOwnProps, StoreRootState>(
  mapStateToProps,
  mapDispatchToProps
)(SectionBottomButtonsGroupPureComponent)