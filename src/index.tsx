import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './app/app';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { RootReducer } from './app-redux-store/root/root-reducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

export const AppReduxStore = createStore(
  RootReducer,
  applyMiddleware(thunk)
)

ReactDOM.render((
  <Provider store={AppReduxStore}>
    <App />
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
