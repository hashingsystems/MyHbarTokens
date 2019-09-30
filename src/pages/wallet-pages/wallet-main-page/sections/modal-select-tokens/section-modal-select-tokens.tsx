import { ModalPrimary } from "../../../../../components/modal/modal-primary";
import React from "react";
import { Icon } from "../../../../../components/icon";
import { ModalFrame, ModalHeader, ModalTitle, ModalBody, ResetButton, SelectTokenSwitch } from "./section-modal-select-tokens.style";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps, ISectionStoreStateProps, ISectionStoreDispatchProps, ISectionOwnProps, ISectionModalsProps } from "./section-modal-select-tokens.props";
import { StoreRootState } from "../../../../../app-redux-store/root/root-reducer";
import { Column, Row } from "../../../../../components/direction";
import { ButtonPrimary } from "../../../../../components/buttons/button-primary";
import { TokenData } from "./resources/tokens-data";
import { LabelLarge, LabelMedium } from "../../../../../components/label";
import { color } from "../../../../../theme";
import { Switch } from "@material-ui/core";
import { SELECTED_TOKENS_KEY } from "../../../../../constants/local-storage";

interface ISectionModalState {
  paymentActivated: boolean,
  selectedTokens: string[]
}

export class SectionModalSelectTokensPureComponent extends React.Component<ISectionModalsProps, ISectionModalState> {
  state = {
    paymentActivated: false,
    selectedTokens: [] as string[]
  }

  componentWillReceiveProps = async () => {
    this.setState({
      selectedTokens: this.props.selectedTokens
    })
  }

  ActionButtonGroup = () => {
    return (
      <Row style={{ alignItems: "center", justifyContent: "center", marginTop: 30, marginBottom: 30 }}>
        <ButtonPrimary style={{ minWidth: 100 }} onClick={this._handleClickUpdateButton}>Update</ButtonPrimary>
        {/* <ResetButton style={{ marginLeft: 10 }}>Reset</ResetButton> */}
      </Row>
    )
  }

  render() {
    return (
      <ModalPrimary className="modal-select-tokens" visible={this.props.visible}>
        <ModalFrame>
          <ModalHeader>
            <ModalTitle>Select Tokens</ModalTitle>
            <Icon iconType="close" style={{ width: 15, height: 15 }} onClick={this._handleClickCloseIconButton} />
          </ModalHeader>
          <ModalBody>
            {
              TokenData.map(token => {
                return (
                  <Row key={token.id} style={{ borderBottom: `1px ${color.palette.brownLight} solid`, marginBottom: 10, padding: "8px 3px 8px 3px" }}>
                    <img src={token.iconURI} style={{ width: 25, height: 25, marginLeft: 5, marginRight: 10 }} />
                    <Column style={{ marginLeft: 10, marginRight: 10 }}>
                      <LabelLarge style={{ fontWeight: "bold" }}>{token.name}</LabelLarge>
                      <LabelMedium>{token.description}</LabelMedium>
                    </Column>
                    <SelectTokenSwitch
                      checked={this.state.selectedTokens.some(currentSelectedToken => currentSelectedToken === token.id)}
                      color="primary"
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                      onChange={(event, checked: boolean) => { this._handleChangeTokenSwitch(token.id, checked) }}
                    />
                  </Row>
                )
              })
            }
          </ModalBody>
          <this.ActionButtonGroup />
        </ModalFrame>
      </ModalPrimary >
    )
  }

  _handleClickCloseIconButton = () => {
    this.props.hideSelectTokensModal()
  }

  _handleChangeTokenSwitch = (tokenId: string, checked: boolean) => {
    if (checked) {
      this.setState(prevState => {
        return {
          selectedTokens: prevState.selectedTokens.concat(tokenId)
        }
      })
    } else {
      this.setState(prevState => {
        return {
          selectedTokens: prevState.selectedTokens.filter(currentToken => currentToken !== tokenId)
        }
      })
    }
  }

  _handleClickUpdateButton = async () => {
    this.props.updateSelectedToken(this.state.selectedTokens)
    await this.saveSelectedTokensToLocalStorage()
    this.props.hideSelectTokensModal()
  }

  saveSelectedTokensToLocalStorage = async () => {
    await localStorage.setItem(SELECTED_TOKENS_KEY, JSON.stringify(this.state.selectedTokens))
    const savedTokens = JSON.parse(await localStorage.getItem(SELECTED_TOKENS_KEY) as string)
  }
}

export const SectionModalSelectTokens = connect<ISectionStoreStateProps, ISectionStoreDispatchProps, ISectionOwnProps, StoreRootState>(
  mapStateToProps,
  mapDispatchToProps
)(SectionModalSelectTokensPureComponent)