import React from "react";
import { LandingPageMainWrapper, PageBody, WalletButtonsGroupWrapper } from "./landing-page-main.style";
import { Footer } from "../../../components/footer";
import { PageBackgroundOverlay } from "../../../components/page-background-overlay/page-background-overlay";
import { HeaderToolbar } from "../../../components-business/header-toolbar/header-toolbar";
import { Column } from "../../../components/direction";
import { color } from "../../../theme";
import { LabelLarger, LabelLarge } from "../../../components/label";
import { ButtonPrimary } from "../../../components/buttons/button-primary";
import { ButtonDefault } from "../../../components/buttons/button-default";
import { RouteComponentProps } from "react-router";
import { WALLET_MAIN_ROUTE_ID } from "../../../constants/route";

export class LandingPageMain extends React.PureComponent<RouteComponentProps, {}> {

  WalletButtonsGroup = () => {
    return (
      <WalletButtonsGroupWrapper>
        <ButtonPrimary className="button-check-wallet" style={{ width: 250 }} onClick={this._handleClickNewWalletButton}>
          Check Wallet
         </ButtonPrimary>
      </WalletButtonsGroupWrapper>
    )
  }

  PageDescription = () => {
    return (
      <Column style={{ marginTop: 50 }}>
        <LabelLarger style={{ textAlign: "center", alignSelf: "center", fontWeight: "bolder" }}>Welcome to My HBAR Token Wallet </LabelLarger>
        <LabelLarger style={{ textAlign: "center", alignSelf: "center", fontWeight: "bold" }}>To begin, make sure you've paired your Hashgraph wallet with the Composer extension</LabelLarger>
        <LabelLarge style={{ textAlign: "center", alignSelf: "center", maxWidth: "72%", marginTop: 30 }}>HBAR Hot wallet is a zero client solution. Connection to Hashgraph network is made via Composer / Relay Network. All keys are saved inside the browser and never sent over our servers. Use at your own risk. 
        </LabelLarge>
      </Column>
    )
  }

  render() {
    return (
      <LandingPageMainWrapper className="landing-page-main">
        <HeaderToolbar />
        <PageBackgroundOverlay />
        <PageBody>
          <this.WalletButtonsGroup />
          <this.PageDescription />
        </PageBody>
        <Footer />
      </LandingPageMainWrapper>
    );
  }

  _handleClickNewWalletButton = () => {
    this.props.history.push(WALLET_MAIN_ROUTE_ID)
  }
}