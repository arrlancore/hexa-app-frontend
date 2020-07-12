/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { node, func, oneOfType, array } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { userSignInSuccess } from './actions';
import { ALL_USER, TOKEN_KEY, USER_KEY } from './constants';
import {
  LOGIN_PAGE,
  HOME_PAGE,
  // eslint-disable-next-line import/no-useless-path-segments
} from '../App/constants';

const AuthRoute = ({ component: Component, userAllowed = [], ...rest }) => {
  const _token = localStorage.getItem(TOKEN_KEY);
  const _user = localStorage.getItem(USER_KEY);

  const dispatch = useDispatch();
  const { isAuth } = useSelector(state => state.auth);

  const isAuthenticatedUser = _token && _user;

  const isAuthorizedUser =
    userAllowed[0] === ALL_USER ? true : userAllowed.includes(_user.role);

  // update/persist auth state
  React.useEffect(() => {
    if (!isAuth && isAuthenticatedUser) {
      dispatch(userSignInSuccess(JSON.parse(_user), _token));
    }
  }, []);

  return (
    <Route
      {...rest}
      render={dataProps => {
        if (!isAuthenticatedUser) {
          return <Redirect to={LOGIN_PAGE} />;
        }
        if (!isAuthorizedUser && isAuthenticatedUser) {
          return <Redirect to={HOME_PAGE} />;
        }
        return <Component {...dataProps} />;
      }}
    />
  );
};
AuthRoute.propTypes = {
  component: oneOfType([node, func]),
  userAllowed: array,
};
export default AuthRoute;
