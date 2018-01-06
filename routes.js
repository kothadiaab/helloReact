import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import App from './container/App.jsx';
import AboutView from './container/About.jsx';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={App}
        />
        <Route
          exact
          path="/about"
          component={AboutView}
        />
      </Switch>
    </BrowserRouter>
  );
}
