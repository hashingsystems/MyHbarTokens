import React from "react";
import { Row, Column } from "../../../../../components/direction";
import { AddressHeaderCell, TokenHeaderCell, IconHeaderCell, BalanceHeaderCell, USDHeaderCell, ActionHeaderCell, HeaderRow, BodyRow, AddressBodyColumn, AddressBodyCell, IconBodyCell, ActionBodyCell, IconBodyColumn, TokenBodyColumn, USDBodyCell, BalanceBodyColumn, ActionBodyColumn, USDBodyColumn, TokenBodyCell, BalanceBodyCell } from "./section-token-table.style";
import { TokenData } from "./token-data"
import { color } from "../../../../../theme";
import { Icon } from "../../../../../components/icon";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps, ISectionStoreStateProps, ISectionStoreDispatchProps, ISectionOwnProps, ISectionTokenTableProps } from "./section-token-table.props";
import { StoreRootState } from "../../../../../app-redux-store/root/root-reducer";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss';
import { accountIdToEthAddress, tinyBarsToHBarsCurr } from '../../../../../utils/conversion/convertors';
import { ModalPrimary } from "../../../../../components/modal/modal-primary";
import { ModalFrame, ModalHeader, ModalTitle, ModalBody, ResetButton } from "./section-modal-add-tokens.style";

export class SectionTokenTablePureComponent extends React.Component<ISectionTokenTableProps, {}> {

  state = {
    tokenData: TokenData,
    selectedTokenIds: [],
    showAddModal: false
  }

  componentWillReceiveProps = (nextProps: ISectionTokenTableProps) => {
    this.getTokenData();
    this.setState({ selectedTokenIds: nextProps.selectedTokenIds });
  }

  componentWillMount = () => {
    this.getTokenData();
  }

  componentDidMount = () => {
    let _this = this;
    //Checking if hash is loaded
    var checkHashExist = setInterval(function () {
      if ((window as any).hash) {
        _this.checkBalance();
        clearInterval(checkHashExist);
      }
    }, 300);

  }

  getTokenData = () => {

    let tokenObj: any = {};

    tokenObj.listTokens = new Array();

    let tokenSelected = localStorage.getItem('selected_tokens_key');
    if (!tokenObj || (tokenObj.listTokens && tokenObj.listTokens.length < 2) || !tokenSelected) {
      localStorage.setItem('selected_tokens_key', JSON.stringify(["HBAR"]));
    }
    if (tokenObj && tokenObj.listTokens && tokenObj.listTokens.length > 1) {
      this.setState({ tokenData: tokenObj });
    } else {
      localStorage.setItem('tokenObj', JSON.stringify(TokenData));
      this.setState({ tokenData: TokenData });
    }
  }

  addUpdateTokenData = (id: string, name: string, address: string, balance: string) => {
    let newTokenData = this.state.tokenData;
    let newSelectedTokenData: any[] = this.props.selectedTokenIds;

    let updated = false;

    // we snipe the array here 
  }


  saveSelectedTokensToLocalStorage = async (savedTokens) => {
    const SELECTED_TOKENS_KEY = 'selected_tokens_key';
    localStorage.setItem(SELECTED_TOKENS_KEY, JSON.stringify(savedTokens));
    this.setState({ selectedTokenIds: savedTokens });
  }


  render() {
    const { tokenData } = this.state;
    return (
      <Column style={{ marginTop: 80, alignSelf: "center", minHeight: 50, width: "80%", marginLeft: 50, marginRight: 50 }}>
        <HeaderRow>
          {/* <IconHeaderCell>Icon</IconHeaderCell> */}
          <TokenHeaderCell>Token</TokenHeaderCell>
          <AddressHeaderCell>Address</AddressHeaderCell>
          <BalanceHeaderCell>Balance</BalanceHeaderCell>
          <ActionHeaderCell>Action</ActionHeaderCell>
        </HeaderRow>
        <BodyRow>
          <Column style={{ flex: 1 }}>
            {
              tokenData.listTokens.map((token, index) => {
                return (
                  <Row key={index}>
                    <TokenBodyColumn>
                      <TokenBodyCell key={index}>
                        {token.name}
                      </TokenBodyCell>
                    </TokenBodyColumn>
                    <AddressBodyColumn>
                      <AddressBodyCell key={index}>
                        {token.address}
                      </AddressBodyCell>
                    </AddressBodyColumn>
                    <BalanceBodyColumn>
                      <BalanceBodyCell key={index}>
                        {token.balances}
                      </BalanceBodyCell>
                    </BalanceBodyColumn>
                    <ActionBodyColumn>
                      <ActionBodyCell onClick={() => this._handleClickSendActionButton(token.name, tokenData.accountID)}>
                        Send
                      </ActionBodyCell>
                    </ActionBodyColumn>
                  </Row>
                )
              })
            }
          </Column>
          <ModalPrimary className="modal-select-tokens" visible={this.state.showAddModal}>
            <ModalFrame>
              <ModalHeader>
                <ModalTitle>Select Tokens</ModalTitle>
                <Icon iconType="close" style={{ width: 15, height: 15 }} onClick={() => { }} />
              </ModalHeader>
              <ModalBody>

              </ModalBody>
            </ModalFrame>
          </ModalPrimary >
        </BodyRow>
      </Column>
    )
  }

  _handleClickSendActionButton = (token: any, source: string) => {
    this.props.updateSendTokensData(token, source)
    this.props.showSendTokensModal()
  }

  _handleClickViewBalanceActionButton = (index: number, token: any, walletAddress: string) => {
    this.checkBalance();
  }

  checkBalance = async () => {
    const hash = (window as any).hash;
    if (hash) {
      hash.triggerCheckBalance()
        .then(res => {
          console.log('Promise:::Resolve::', res)
          let TokenDataObj: any = localStorage.getItem('tokenObj');
          TokenDataObj = JSON.parse(TokenDataObj);
          TokenDataObj.accountID=res.currentAccount;
          TokenDataObj.address = accountIdToEthAddress(res.currentAccount);
          TokenDataObj.listTokens[0].balances=tinyBarsToHBarsCurr(res.balance);
          TokenDataObj.listTokens[0].address = res.currentAccount;

          let sub="";
          if(res.currentNetwork != "mainnet"){
            sub = ".testnet"
          }
    
          fetch('https://api'+sub+'.kabuto.sh/v1/entity/' + res.currentAccount)
            .then(response => response.json())
            .then(data => {

              for (var token in data.account.balance.tokens) {
                  if (data.account.balance.tokens.hasOwnProperty(token)) {
                      console.log(token + " -> " + data.account.balance.tokens[token]);

                      let balance = String(data.account.balance.tokens[token]);
                      TokenDataObj.listTokens.push({
                        "id": token,
                        "address": token,
                        "name": token,
                        "balances": balance.substring(0, balance.length-8)+"." + balance.substring(balance.length-8, balance.length),
                        "usds": ""
                      })
                  }
              }
              localStorage.setItem('tokenObj', JSON.stringify(TokenDataObj));
              this.setState({ tokenData: TokenDataObj })
            });
        })
        .catch(err => {
          //TODO show modal for error
          console.log("Promise::Error::", err)
        })
    }
  }

}

export const SectionTokenTable = connect<ISectionStoreStateProps, ISectionStoreDispatchProps, ISectionOwnProps, StoreRootState>(
  mapStateToProps,
  mapDispatchToProps
)(SectionTokenTablePureComponent)

