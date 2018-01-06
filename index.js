import React from 'react';
import ReactDOM from 'react-dom';

import App from './container/App.jsx';
import { Provider } from 'react-redux';
import store from './store/store'

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('site-wrapper')
);
