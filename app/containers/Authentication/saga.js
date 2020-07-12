/**
 * Gets the repositories of the user from Github
 */

import { call, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import config from 'config';

import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_IN_REQUEST,
  TOKEN_KEY,
  USER_KEY,
} from './constants';

import { SET_OPEN_SNACKBAR } from '../SnackbarProvider/constants';
import { getErrorMessage } from '../../utils/handleError';

const API_AUTH_TOKEN = '/api/auth/login';

/**
 * Github repos request/response handler
 */
export function* signInSaga({ payload }) {
  const options = {
    method: 'POST',
    baseURL: config.app.baseUrl + API_AUTH_TOKEN,
    data: payload,
  };

  try {
    const { data } = yield call(axios, options);

    const { token, ...user } = data;
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user.data));
    // update reducer
    yield put({
      type: SIGN_IN_SUCCESS,
      data: user.data,
      token,
    });
  } catch (error) {
    // update error to snackbar messaging
    yield put({
      type: SET_OPEN_SNACKBAR,
      data: { message: getErrorMessage(error) },
    });
    // update error to module reducer
    yield put({ type: SIGN_IN_FAILURE, error });
  }
}

export function* authenticationWatchers() {
  yield takeLatest(SIGN_IN_REQUEST, signInSaga);
}
