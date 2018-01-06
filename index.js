import React from 'react';
import ReactDOM from 'react-dom';

import App from './container/App.jsx';
import { Provider } from 'react-redux';
import store from './store/store';
import AppRoutes from './routes';

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('site-wrapper')
);
