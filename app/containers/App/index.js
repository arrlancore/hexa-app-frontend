/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from 'containers/LoginPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import DestinationPage from 'containers/DestinationPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import {
  LOGIN_PAGE,
  HOME_PAGE,
  DESTINATION_PAGE,
  ALL,
  ROLE_ADMIN,
} from './constants';
import AuthRoute from '../Authentication/AuthRoute';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path={LOGIN_PAGE} component={LoginPage} />
        <AuthRoute
          userAllowed={[ALL]}
          exact
          path={HOME_PAGE}
          component={HomePage}
        />
        <AuthRoute
          userAllowed={[ROLE_ADMIN]}
          exact
          path={DESTINATION_PAGE}
          component={DestinationPage}
        />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
