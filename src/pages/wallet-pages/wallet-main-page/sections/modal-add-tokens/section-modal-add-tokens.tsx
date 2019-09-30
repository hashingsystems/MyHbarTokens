import { ModalPrimary } from "../../../../../components/modal/modal-primary";
import React from "react";
import { Icon } from "../../../../../components/icon";
import { ModalFrame, ModalHeader, ModalTitle, ModalBody, FormSendToken, FormLabel, ResetButton } from "./section-modal-add-tokens.style";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps, ISectionStoreStateProps, ISectionStoreDispatchProps, ISectionOwnProps, ISectionModalsProps } from "./section-modal-add-tokens.props";
import { StoreRootState } from "../../../../../app-redux-store/root/root-reducer";
import { Row, Column } from "../../../../../components/direction";
import { TextInputOutline } from "../../../../../components/text-input/text-input-outline";
import { ButtonPrimary } from "../../../../../components/buttons/button-primary";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { TokenData } from "../token-table/token-data";
import { accountIdToEthAddress } from '../../../../../utils/conversion/convertors';

export class SectionModalAddTokensPureComponent extends React.Component<ISectionModalsProps, {}> {
  state = {
    name: '',
    address: '',
    buttonTxt: 'Save',
    visible: false
  }

  componentWillReceiveProps = (nextProps: ISectionModalsProps) => {
    this.setState({ visible: nextProps.visible });
  }

  componentDidMount = async () => {

  }

  handleInputChange(id, value) {
    switch (id) {
      case 'name': {
        this.setState({ name: value });
        break;
      }
      case 'address': {
        this.setState({ address: value });
        break;
      }
    }
  }

  ActionButtonGroup = () => {
    return (
      <Column style={{ alignItems: "center", marginTop: 30 }}>
        <ButtonPrimary style={{ marginBottom: 10, width: 250 }} onClick={this._handleClickAddTokenButton} disabled={this.checkValidation()}>{this.state.buttonTxt}</ButtonPrimary>
      </Column>
    )
  }

  checkValidation() {
    let validFlag = true;
    if (!(this.state.address.length > 0)) {
      validFlag = false;
    }
    return !validFlag;
  }

  render() {
    return (
      <ModalPrimary className="modal-select-tokens" visible={this.props.visible}>
        <ModalFrame>
          <ModalHeader>
            <ModalTitle>Add Tokens</ModalTitle>
            <Icon iconType="close" style={{ width: 15, height: 15 }} onClick={this._handleClickCloseIconButton} />
          </ModalHeader>
          <ModalBody>
            <FormSendToken>
              {this.state.name !== '' ? (<Row style={{ justifyContent: "center", marginTop: 15, marginBottom: 15 }}>
                <FormLabel style={{ flex: 2 }}>Name</FormLabel>
                <TextInputOutline style={{ flex: 8 }} id={`name`} value={this.state.name} disabled={true} />
              </Row>) : null}
              <Row style={{ justifyContent: "center", marginTop: 15, marginBottom: 15 }}>
                <FormLabel style={{ flex: 2 }}>Address</FormLabel>
                <TextInputOutline style={{ flex: 8 }} id={`address`} placeholder={`Enter contract ID`} value={this.state.address} onChange={(e) => this.handleInputChange(e.target.id, e.target.value)} />
              </Row>
            </FormSendToken>
          </ModalBody>
          <this.ActionButtonGroup />
        </ModalFrame>
      </ModalPrimary >
    )
  }

  _handleClickCloseIconButton = () => {
    this.props.hideAddTokensModal()
  }


  _handleClickAddTokenButton = () => {
    if (this.state.buttonTxt === 'Save') {
      this.getTokenName();
    } else {
      this.saveToken()
    }
  }

  getTokenName = () => {
    const hash = (window as any).hash;
    const contractId = `${this.state.address}`;
    let data = {
      contractid: contractId,
      memo: "get token name",
      paymentserver: "https://mps.hashingsystems.com",
      params: `[]`,
      amount: 0,
      abi: `[{
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }]`,
    }
    const _this = this;
    hash.triggerSmartContract(data)
      .then(res => {

        if (res.code == 200) {
          this.setState({ name: res.result[0], buttonTxt: `Add Token` })
        } else {
          Swal.fire({
            title: 'Error',
            text: res.message,
            type: 'error',
            confirmButtonText: 'Ok',
          })
        }
      })
      .catch(err => {
        console.log("Promise Transfer ::Error::", err);
        Swal.fire({
          title: 'Error',
          text: 'Error Code: ' + err.responseData.nodePrecheckcode,
          type: 'error',
          confirmButtonText: 'Ok',
        })
      })
  }

  saveToken() {
    let newTokenData: any = localStorage.getItem('tokenObj');
    newTokenData = JSON.parse(newTokenData);

    let newSelectedTokenData: any = localStorage.getItem('selected_tokens_key');
    newSelectedTokenData = JSON.parse(newSelectedTokenData);

    let newToken: any = {
      "id": this.state.name,
      "address": this.state.address,
      "name": this.state.name,
      "balances": "0",
      "usds": ""
    };
    
    newSelectedTokenData.push(this.state.name);
    newTokenData.listTokens.push(newToken);
    localStorage.setItem('tokenObj', JSON.stringify(newTokenData));
    this.saveSelectedTokensToLocalStorage(newSelectedTokenData);
    this.props.updateSelectedToken(newSelectedTokenData)
    this._handleClickCloseIconButton();
  }



  saveSelectedTokensToLocalStorage = async (savedTokens) => {
    const SELECTED_TOKENS_KEY = 'selected_tokens_key';
    localStorage.setItem(SELECTED_TOKENS_KEY, JSON.stringify(savedTokens));
    this.setState({ selectedTokenIds: savedTokens });
  }

}

export const SectionModalAddTokens = connect<ISectionStoreStateProps, ISectionStoreDispatchProps, ISectionOwnProps, StoreRootState>(
  mapStateToProps,
  mapDispatchToProps
)(SectionModalAddTokensPureComponent)