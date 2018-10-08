import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import setupStore from './store';
import {PersistGate} from 'redux-persist/integration/react';
import {createGlobalStyle} from 'styled-components';

const setup = setupStore ();

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        padding-top: 50px;
        font-family: sans-serif;
    }
`;

ReactDOM.render (
  <Provider store={setup.store}>
    <PersistGate loading={null} persistor={setup.persistor}>
      <GlobalStyle />
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById ('root')
);
registerServiceWorker ();
