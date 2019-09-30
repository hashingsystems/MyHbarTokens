import React, { Component } from 'react';
import { Switch, Route, HashRouter, BrowserRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { appMapStateToProps, appMapDispatchToProps, IAppStoreStateProps, IAppStoreDispatchProps, IAppOwnProps, IAppProps } from './app.props';
import { connect } from 'react-redux';
import { StoreRootState } from '../app-redux-store/root/root-reducer';
import { getThemeFromId } from '../theme';
import { languages } from '../locales/locales';
import { addLocaleData, IntlProvider } from 'react-intl';
import locale_en from 'react-intl/locale-data/en';
import locale_es from 'react-intl/locale-data/es';
import { LandingPageMain } from '../pages/landing-pages/landing-page-main/landing-page-main';
import { WALLET_MAIN_ROUTE_ID, LANDING_MAIN_PAGE_ROUTE_ID } from '../constants/route';
import { WalletMainPage } from '../pages/wallet-pages/wallet-main-page/wallet-main-page';
addLocaleData([...locale_en, ...locale_es]);

class AppPureComponent extends Component<IAppProps, {}> {

  render() {
    return (
      <AppWrapper className="App">
        <ThemeProvider theme={getThemeFromId(this.props.currentThemeId)}>
          <IntlProvider locale={this.props.currentLanguage} messages={languages[this.props.currentLanguage]} >
            <HashRouter hashType="noslash">
              <Switch>
                <Route exact path="/" component={LandingPageMain} />
                <Route exact path={LANDING_MAIN_PAGE_ROUTE_ID} component={LandingPageMain} />
                <Route exact path={WALLET_MAIN_ROUTE_ID} component={WalletMainPage} />
              </Switch>
            </HashRouter>
          </IntlProvider>
        </ThemeProvider>
      </AppWrapper>
    );
  }
}

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-items: center;
`

export const App = connect<IAppStoreStateProps, IAppStoreDispatchProps, IAppOwnProps, StoreRootState>(
  appMapStateToProps,
  appMapDispatchToProps
)(AppPureComponent);

