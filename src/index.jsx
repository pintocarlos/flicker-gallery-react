import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import App from './App';
import './sass/modules/css-reset.scss';
import './sass/modules/main.scss';

ReactDOM.render(
  <Provider store={ store }>
      <App />
    </Provider>,
    document.getElementById('app')
);
