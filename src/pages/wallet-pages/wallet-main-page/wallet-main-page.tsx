import React from "react";
import { PageBody, WalletButtonsGroupWrapper, PageWrapper, HorizontalLine, ButtonSelectToken } from "./wallet-main-page.style";
import { Footer } from "../../../components/footer";
import { PageBackgroundOverlay } from "../../../components/page-background-overlay/page-background-overlay";
import { HeaderToolbar } from "../../../components-business/header-toolbar/header-toolbar";
import { color } from "../../../theme";
import { ButtonPrimary } from "../../../components/buttons/button-primary";
import { ButtonDefault } from "../../../components/buttons/button-default";
import { SectionTokenTable } from "./sections/token-table/section-token-table";
import { SectionBottomButtonsGroup } from "./sections/bottom-buttons-group/section-bottom-buttons-group";
import { SectionModalSendTokens } from "./sections/modal-send-tokens/section-modal-send-tokens";
import { SectionModalAddTokens } from "./sections/modal-add-tokens/section-modal-add-tokens";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps, IPageStoreStateProps, IPageStoreDispatchProps, IPageOwnProps, IPageWalletMainProps } from "./wallet-main-page.props";
import { StoreRootState } from "../../../app-redux-store/root/root-reducer";
import { AppSnackBar } from "../../../components-business/app-snack-bar";
import { Transition } from 'react-transition-group';
import { fadeIn } from "../../../constants/animation";
import { SectionModalSelectTokens } from "./sections/modal-select-tokens/section-modal-select-tokens";
import { SELECTED_TOKENS_KEY } from "../../../constants/local-storage";

class WalletMainPagePureComponent extends React.PureComponent<IPageWalletMainProps, {}> {

  state = {
    isPageMounted: false
  }

  componentDidMount = async () => {
    this.setState({ isPageMounted: true })
    await this.fetchSelectedTokensFromLocalStorage()
  }

  componentWillUnmount = async () => {
    this.setState({ isPageMounted: false })
  }

  ArisingViews = () => {
    return (
      <>
        <AppSnackBar />
        <SectionModalSendTokens />
        <SectionModalAddTokens />
        <SectionModalSelectTokens />
      </>
    )
  }

  WalletButtonsGroup = () => {
    return (
      <WalletButtonsGroupWrapper style={{ display: "none" }}>
        <ButtonDefault className="button-unlock-wallet">
          Unlock Wallet
        </ButtonDefault>
      </WalletButtonsGroupWrapper>
    )
  }

  render() {
    return (
      <Transition in={this.state.isPageMounted} timeout={0}>
        {
          state => (
            <PageWrapper className="wallet-main-page" style={{ ...fadeIn.defaultStyle, ...fadeIn.transitionStyles[state] }}>
              <PageBackgroundOverlay />
              <HeaderToolbar />
              <this.ArisingViews />
              <PageBody>
                <this.WalletButtonsGroup />
                <SectionTokenTable />
                <SectionBottomButtonsGroup />
                <HorizontalLine />
                <ButtonSelectToken onClick={this._handleClickAddTokensButton}>Add Tokens</ButtonSelectToken>
              </PageBody>
              <Footer />
            </PageWrapper>
          )
        }
      </Transition>
    );
  }

  _handleClickSelectTokensButton = () => {
    this.props.showModalSelectTokens()
  }

  _handleClickAddTokensButton = () => {
    this.props.showAddTokensModal()
  }

  fetchSelectedTokensFromLocalStorage = async () => {
    const savedTokens = JSON.parse(await localStorage.getItem(SELECTED_TOKENS_KEY) as string)
    if (savedTokens && savedTokens.length > 0) {
      // Save to redux store
      this.props.updateSelectedToken(savedTokens)
    } else {
      // Add default selected tokens
      const defaultSelectedTokens = ["HBAR", "OMG", "BAT"]
      this.props.updateSelectedToken(defaultSelectedTokens)
    }
  }
}

export const WalletMainPage = connect<IPageStoreStateProps, IPageStoreDispatchProps, IPageOwnProps, StoreRootState>(
  mapStateToProps,
  mapDispatchToProps
)(WalletMainPagePureComponent)