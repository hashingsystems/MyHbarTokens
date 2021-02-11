import { ModalPrimary } from "../../../../../components/modal/modal-primary";
import React from "react";
import { Icon } from "../../../../../components/icon";
import { ModalFrame, ModalHeader, ModalTitle, ModalBody, FormSendToken, FormLabel, ResetButton } from "./section-modal-send-tokens.style";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps, ISectionStoreStateProps, ISectionStoreDispatchProps, ISectionOwnProps, ISectionModalsProps } from "./section-modal-send-tokens.props";
import { StoreRootState } from "../../../../../app-redux-store/root/root-reducer";
import { Row, Column } from "../../../../../components/direction";
import { TextInputOutline } from "../../../../../components/text-input/text-input-outline";
import { ButtonPrimary } from "../../../../../components/buttons/button-primary";
import { HederaPayment } from "./hedera-payment";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
// import { TokenData } from "../token-table/token-data";
import { accountIdToEthAddress, ethAddressToAccountId } from '../../../../../utils/conversion/convertors';

export class SectionModalSendTokensPureComponent extends React.Component<ISectionModalsProps, {}> {
  state = {
    paymentActivated: false,
    amtValue: 0,
    toAddressValue: ''
  }

  componentDidMount = async () => {
    const paymentActivated = await localStorage.getItem("paymentState")
    this.setState({
      paymentActivated: paymentActivated === "activated" ? true : false
    })
    if (paymentActivated === "activated") {
      this.props.showAppSnackBar()
    }
    await localStorage.setItem("paymentState", "inactivate")
  }

  handleInputChange(id, value) {
    switch (id) {
      case 'amtInput': {
        this.setState({ amtValue: value });
        break;
      }
      case 'toAddInput': {
        this.setState({ toAddressValue: value });
        break;
      }
    }
  }

  ActionButtonGroup = () => {
    return (
      <Column style={{ alignItems: "center", marginTop: 30 }}>
        <ButtonPrimary style={{ marginBottom: 10, width: 250 }} onClick={this._handleClickCreateTransactionButton} disabled={this.checkValidation()}>Create Transaction</ButtonPrimary>
        <ResetButton style={{ marginTop: 5, marginBottom: 20 }}>Reset</ResetButton>
      </Column>
    )
  }

  checkValidation() {
    let validFlag = true;
    if (!(this.state.amtValue > 0)) {
      validFlag = false;
    }
    if (!(this.state.toAddressValue.length > 0)) {
      validFlag = false;
    }
    return !validFlag;
  }

  render() {
    let TokenData: any = localStorage.getItem('tokenObj');
    TokenData = JSON.parse(TokenData);
    let tokenAccountID = '';
    TokenData.listTokens.forEach((token, index) => {
      if (token.name == this.props.token) {
        tokenAccountID = token.address;
      }
    })
    return (
      <ModalPrimary className="modal-select-tokens" visible={this.props.visible}>
        <ModalFrame>
          <ModalHeader>
            <ModalTitle>{this.props.source == tokenAccountID ? 'Crypto Transfer' : 'Send Tokens'}</ModalTitle>
            <Icon iconType="close" style={{ width: 15, height: 15 }} onClick={this._handleClickCloseIconButton} />
          </ModalHeader>
          <ModalBody>
            <FormSendToken>
              <Row style={{ justifyContent: "center", marginTop: 15, marginBottom: 15 }}>
                <FormLabel style={{ flex: 2 }}>Source</FormLabel>
                <TextInputOutline style={{ flex: 8 }} value={this.props.source || TokenData.address} />
              </Row>
              <Row style={{ justifyContent: "center", marginTop: 15, marginBottom: 15 }}>
                <FormLabel style={{ flex: 2 }}>Amount</FormLabel>
                <TextInputOutline type="number" style={{ flex: 3 }} id={`amtInput`} value={this.state.amtValue} onChange={(e) => this.handleInputChange(e.target.id, e.target.value)}></TextInputOutline>
                <FormLabel style={{ flex: 2, justifyContent: "center" }}>Token</FormLabel>
                <TextInputOutline style={{ flex: 3 }} value={this.props.token} />
              </Row>
              <TextInputOutline style={{ alignSelf: "stretch", marginTop: 15, marginBottom: 15 }} placeholder="Send to address" id={`toAddInput`} value={this.state.toAddressValue} onChange={(e) => this.handleInputChange(e.target.id, e.target.value)} />
              {/* <Row style={{ justifyContent: "center", marginTop: 15, marginBottom: 15 }}>
                <FormLabel style={{ marginLeft: 0, marginRight: "auto" }}>Gas Price (HBAR)</FormLabel>
                <TextInputOutline type="number" defaultValue="10.00" />
              </Row> */}
            </FormSendToken>
          </ModalBody>
          <this.ActionButtonGroup />
        </ModalFrame>
        <HederaPayment activated={this.state.paymentActivated} />
      </ModalPrimary >
    )
  }

  _handleClickCloseIconButton = () => {
    this.props.hideSendTokensModal()
  }




  _handleClickCreateTransactionButton = async () => {
    let amount = Number(this.state.amtValue);
    let toAddress = "";
    if (this.state.toAddressValue.length === 40) {
      toAddress = `"${this.state.toAddressValue}"`;
    } else {
      toAddress = `"${accountIdToEthAddress(this.state.toAddressValue)}"`;
    }
    let TokenData: any = localStorage.getItem('tokenObj');
    TokenData = JSON.parse(TokenData);
    const hash = (window as any).hash;

    if (hash) {

      let contractId;
      TokenData.listTokens.forEach(element => {
        if (this.props.token == element.name)
          contractId = element.address;
      });
      if (contractId) {
        if (TokenData.accountID === contractId) {
          const account = this.state.toAddressValue;
          let data = {
            memo: "crypto transfer",
            paymentserver: "https://mps.hashingsystems.com",
            account: { contractId }, // account id of the "pay to" account
            contentid: "test1",
            redirect: '{"nonPayingAccount": "/nomicropaymentreceived.html"}',
            recipientlist: `[{"tinybars": "${amount}", "to":"${account}"}]`,
            time: "1"
          }
          const _this = this;
          hash.triggerCryptoTransfer(data)
            .then(res => {
              if (res.receiptStatus == 22) {
                Swal.fire({
                  title: 'Success',
                  text: 'Token Transfered Successfully',
                  type: 'success',
                  confirmButtonText: 'Ok',
                }).then((result) => {
                  _this._handleClickCloseIconButton();
                });
              } else if (res.receiptStatus == 10) {
                Swal.fire({
                  title: 'Warning',
                  text: 'Insufficient Balance',
                  type: 'warning',
                  confirmButtonText: 'Ok',
                }).then((result) => {
                  _this._handleClickCloseIconButton();
                });
              } else {
                Swal.fire({
                  title: 'Error',
                  text: 'Something went wrong',
                  type: 'error',
                  confirmButtonText: 'Ok',
                })
              }
            })
            .catch(err => {
              console.log("Promise Transfer ::Error::", err);
              if (err.responseData && err.responseData.nodePrecheckcode == 10) {
                Swal.fire({
                  title: 'Warning',
                  text: 'Insufficient Balance',
                  type: 'warning',
                  confirmButtonText: 'Ok',
                }).then((result) => {
                  _this._handleClickCloseIconButton();
                });
              } else {
                Swal.fire({
                  title: 'Error',
                  text: 'Error: ' + err,
                  type: 'error',
                  confirmButtonText: 'Ok',
                })
              }
            })
        } else {


        let extensionid = "hdjnnemgikeoehneddegfcmkljenlean";
        console.log("toAddress", this.state.toAddressValue)
        let data = {
            memo:"My First Hedera Transaction",
            contentid:'test1',
            recipientlist:'[{"tokenId": "'+contractId+'", "token": "'+amount+'", "decimals":"8", "to":"'+this.state.toAddressValue+'"}]'
        }

        let transferToken = () => {
            let contractDiv = document.getElementsByTagName('body')[0];
            let hederaTag = document.createElement("hedera-micropayment");
                hederaTag.setAttribute("data-memo", data.memo || ' ');
                hederaTag.setAttribute("data-contentid", data.contentid || '');
                hederaTag.setAttribute("data-extensionid", extensionid);
                hederaTag.setAttribute("data-recipientlist", data.recipientlist || '');
            contractDiv.appendChild(hederaTag);
        }
        const _this = this;

        transferToken();
        /*
            .then(res => {
              if (res.code == 200) {
                Swal.fire({
                  title: 'Success',
                  text: 'Token Transfered Successfully',
                  type: 'success',
                  confirmButtonText: 'Ok',
                }).then((result) => {
                  _this._handleClickCloseIconButton();
                });
              } else {
                Swal.fire({
                  title: 'Error',
                  text: 'Something went wrong',
                  type: 'error',
                  confirmButtonText: 'Ok',
                })
              }
            })
            .catch(err => {
              console.log("Promise Transfer ::Error::", err);
              if (err.responseData && err.responseData.nodePrecheckcode == 10) {
                Swal.fire({
                  title: 'Warning',
                  text: 'Insufficient Balance',
                  type: 'warning',
                  confirmButtonText: 'Ok',
                }).then((result) => {
                  _this._handleClickCloseIconButton();
                });
              } else {
                Swal.fire({
                  title: 'Error',
                  text: 'Error: ' + err,
                  type: 'error',
                  confirmButtonText: 'Ok',
                })
              }
            }) 
            */           
        }
      }
    }
  }
}

export const SectionModalSendTokens = connect<ISectionStoreStateProps, ISectionStoreDispatchProps, ISectionOwnProps, StoreRootState>(
  mapStateToProps,
  mapDispatchToProps
)(SectionModalSendTokensPureComponent)