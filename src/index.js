import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import setupStore from './store';
import {PersistGate} from 'redux-persist/integration/react';

const setup = setupStore ();

ReactDOM.render (
  <Provider store={setup.store}>
    <PersistGate loading={null} persistor={setup.persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById ('root')
);
registerServiceWorker ();
