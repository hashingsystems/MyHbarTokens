import { combineReducers } from "redux";
import { pageWalletMainReducer } from "../../pages/wallet-pages/wallet-main-page/page-redux-store/page-reducer";

// Import all page reducers here
// Note: Please do not create page-redux-store for all pages, only do that for
// the page containing many complicated sections that need redux store to support

export const pagesReducer = combineReducers({
  walletMain: pageWalletMainReducer
})