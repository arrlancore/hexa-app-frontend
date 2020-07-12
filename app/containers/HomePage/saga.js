/**
 * Gets the repositories of the user from Github
 */

import { call, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import config from 'config';

import {
  LIST_CLUSTER_FAILURE,
  LIST_CLUSTER_REQUEST,
  LIST_CLUSTER_SUCCESS,
  CREATE_CLUSTER_REQUEST,
  UPDATE_CLUSTER_REQUEST,
  DELETE_CLUSTER_REQUEST,
  CREATE_CLUSTER_SUCCESS,
  CREATE_CLUSTER_FAILURE,
  UPDATE_CLUSTER_SUCCESS,
  UPDATE_CLUSTER_FAILURE,
  DELETE_CLUSTER_SUCCESS,
  DELETE_CLUSTER_FAILURE,
} from './constants';

import { SET_OPEN_SNACKBAR } from '../SnackbarProvider/constants';
import { getErrorMessage } from '../../utils/handleError';

const API_CLUSTER = '/api/cluster/';

export function* getListClusterSaga({ token }) {
  const options = {
    method: 'GET',
    baseURL: config.app.baseUrl + API_CLUSTER,
    headers: {
      Authorization: token,
    },
  };
  try {
    const response = yield call(axios, options);
    const { data } = response.data;
    // update reducer
    yield put({
      type: LIST_CLUSTER_SUCCESS,
      data,
    });
  } catch (error) {
    // update error to snackbar messaging
    yield put({
      type: SET_OPEN_SNACKBAR,
      data: { message: getErrorMessage(error) },
    });
    // update error to module reducer
    yield put({ type: LIST_CLUSTER_FAILURE, error });
  }
}

export function* createClusterSaga({ token, payload }) {
  const options = {
    method: 'POST',
    baseURL: config.app.baseUrl + API_CLUSTER,
    data: payload,
    headers: {
      Authorization: token,
    },
  };
  try {
    const response = yield call(axios, options);
    const { data } = response.data;
    // update reducer
    yield put({
      type: CREATE_CLUSTER_SUCCESS,
      data,
    });
  } catch (error) {
    // update error to snackbar messaging
    yield put({
      type: SET_OPEN_SNACKBAR,
      data: { message: getErrorMessage(error) },
    });
    // update error to module reducer
    yield put({ type: CREATE_CLUSTER_FAILURE, error });
  }
}

export function* editClusterSaga({ token, payload, id }) {
  const options = {
    method: 'PUT',
    baseURL: `${config.app.baseUrl}${API_CLUSTER}${id}`,
    data: payload,
    headers: {
      Authorization: token,
    },
  };
  try {
    yield call(axios, options);
    // update reducer
    yield put({
      type: UPDATE_CLUSTER_SUCCESS,
    });
  } catch (error) {
    // update error to snackbar messaging
    yield put({
      type: SET_OPEN_SNACKBAR,
      data: { message: getErrorMessage(error) },
    });
    // update error to module reducer
    yield put({ type: UPDATE_CLUSTER_FAILURE, error });
  }
}

export function* deleteClusterSaga({ token, id }) {
  const options = {
    method: 'DELETE',
    baseURL: `${config.app.baseUrl}${API_CLUSTER}${id}`,
    headers: {
      Authorization: token,
    },
  };
  try {
    yield call(axios, options);
    // update reducer
    yield put({
      type: DELETE_CLUSTER_SUCCESS,
    });
  } catch (error) {
    // update error to snackbar messaging
    yield put({
      type: SET_OPEN_SNACKBAR,
      data: { message: getErrorMessage(error) },
    });
    // update error to module reducer
    yield put({ type: DELETE_CLUSTER_FAILURE, error });
  }
}

export function* homeWatchers() {
  yield takeLatest(LIST_CLUSTER_REQUEST, getListClusterSaga);
  yield takeLatest(CREATE_CLUSTER_REQUEST, createClusterSaga);
  yield takeLatest(UPDATE_CLUSTER_REQUEST, editClusterSaga);
  yield takeLatest(DELETE_CLUSTER_REQUEST, deleteClusterSaga);
}
