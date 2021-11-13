import React from 'react';
import './index.scss';
import App from './App';
import * as ReactDOM from "react-dom";
import store from "./redux/Store";
import {Provider} from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persist}>
        <App/>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);