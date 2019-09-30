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
    let tokenObj: any = localStorage.getItem('tokenObj');
    let tokenSelected = localStorage.getItem('selected_tokens_key');
    tokenObj = JSON.parse(tokenObj);
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
    newTokenData.listTokens.forEach(token => {
      if (token.address === address) {
        updated = true;
        token.id = id;
        token.address = address;
        token.name = name;
        token.balances = balance;
        token.usds = "";
      }
    });
    if (!updated) {
      let newToken: any = {
        "id": id,
        "address": address,
        "name": name,
        "balances": balance,
        "usds": ""
      };
      newSelectedTokenData.push(name);
      newTokenData.listTokens.push(newToken);
    }
    localStorage.setItem('tokenObj', JSON.stringify(newTokenData));
    this.setState({ tokenData: newTokenData });
    this.saveSelectedTokensToLocalStorage(newSelectedTokenData);
  }


  saveSelectedTokensToLocalStorage = async (savedTokens) => {
    const SELECTED_TOKENS_KEY = 'selected_tokens_key';
    localStorage.setItem(SELECTED_TOKENS_KEY, JSON.stringify(savedTokens));
    this.setState({ selectedTokenIds: savedTokens });
  }

  deleteToken = (accountID) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        let tokenObj: any = localStorage.getItem('tokenObj');
        let tokenSelectedObj: any = localStorage.getItem('selected_tokens_key');
        tokenSelectedObj = JSON.parse(tokenSelectedObj);

        tokenObj = JSON.parse(tokenObj);
        let deleteIndex = null
        let deleteToken = '';
        tokenObj.listTokens.forEach((token, index) => {
          if (token.address === accountID) {
            deleteIndex = index;
            deleteToken = token.name;
          }
        });
        if (deleteIndex && tokenSelectedObj) {
          tokenSelectedObj = tokenSelectedObj.filter((tokenname) => {
            if (tokenname != deleteToken) {
              return tokenname
            }
          })
          let newTokenObj = tokenObj.listTokens.splice(deleteIndex, 1);
          localStorage.setItem('tokenObj', JSON.stringify(tokenObj));
          localStorage.setItem('selected_tokens_key', JSON.stringify(tokenSelectedObj));
          let newSelectedToken = localStorage.getItem('selected_tokens_key');
          this.setState({ selectedTokenIds: newSelectedToken, tokenData: tokenObj })
        }
        Swal.fire(
          'Deleted!',
          'Your token has been deleted.',
          'success'
        )
      }
    })
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
              tokenData.listTokens.filter(publicToken => this.props.selectedTokenIds.includes(publicToken.id)).map((token, index) => {
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
                      <ActionBodyCell onClick={() => this._handleClickViewBalanceActionButton(index, token, tokenData.address)}>
                        View Balance
                      </ActionBodyCell>
                      <ActionBodyCell onClick={() => this._handleClickSendActionButton(token.name, tokenData.accountID)}>
                        Send
                      </ActionBodyCell>
                      {index !== 0 ? <ActionBodyCell onClick={() => this.deleteToken(token.address)}>
                        Delete
                      </ActionBodyCell> : <ActionBodyCell onClick={() => { }} style={{ visibility: 'hidden' }}>
                          Delete
                        </ActionBodyCell>}
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
    if (token.address === this.state.tokenData.accountID) {
      this.checkBalance();
    } else {
      this.fetchBalances(index, token, walletAddress);
    }
  }


  fetchBalances = async (index, tokenData, walletAddress) => {
    const hash = (window as any).hash;
    if (hash) {
      let newTokenData = this.state.tokenData;
      let data = {
        contractid: tokenData.address,
        memo: "balance ",
        paymentserver: "https://mps.hashingsystems.com",
        params: `["${walletAddress.toString()}"]`,
        amount: 0,
        abi: `[{
        "constant": true,
        "inputs": [
          {
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "name": "balance",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }]`,
      }
      hash.triggerSmartContract(data)
        .then(res => {
          if (res.result === null) {
            this.props.updateBalancesValues("0")
          } else {
            this.props.updateBalancesValues(res.result.toString())
            newTokenData.listTokens[index].balances = res.result  // TODO 1e18;
            this.setState({ tokenData: newTokenData })
          }
        })
        .catch(err => {
          Swal.fire({
            title: 'Error',
            text: 'Error: ' + err,
            type: 'error',
            confirmButtonText: 'Ok',
          })
        })
    }
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
          localStorage.setItem('tokenObj', JSON.stringify(TokenDataObj));
          this.setState({ tokenData: TokenDataObj })

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

