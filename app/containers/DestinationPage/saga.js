/**
 * Gets the repositories of the user from Github
 */

import { call, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import config from 'config';

import {
  UPDATE_DESTINATION_FAILURE,
  UPDATE_DESTINATION_REQUEST,
  UPDATE_DESTINATION_SUCCESS,
  UPDATE_DESTINATION_CLUSTER_REQUEST,
  UPDATE_DESTINATION_CLUSTER_SUCCESS,
  UPDATE_DESTINATION_CLUSTER_FAILURE,
  GET_DESTINATION_CLUSTER_REQUEST,
  GET_DESTINATION_CLUSTER_FAILURE,
  GET_DESTINATION_CLUSTER_SUCCESS,
} from './constants';

import { SET_OPEN_SNACKBAR } from '../SnackbarProvider/constants';
import { getErrorMessage } from '../../utils/handleError';

const API_DESTINATION = '/api/destination/';
const API_DESTINATION_CLUSTER = '/api/destination-cluster/';

export function* getDestinationClusterSaga({ token, id }) {
  const options = {
    method: 'GET',
    baseURL: `${config.app.baseUrl}${API_DESTINATION_CLUSTER}${id}`,
    headers: {
      Authorization: token,
    },
  };
  try {
    const { data } = yield call(axios, options);
    // update reducer
    yield put({
      type: GET_DESTINATION_CLUSTER_SUCCESS,
      data,
    });
  } catch (error) {
    // update error to snackbar messaging
    yield put({
      type: SET_OPEN_SNACKBAR,
      data: { message: getErrorMessage(error) },
    });
    // update error to module reducer
    yield put({ type: GET_DESTINATION_CLUSTER_FAILURE, error });
  }
}

export function* updateDestinationClusterSaga({ token, id, payload }) {
  const options = {
    method: 'PUT',
    baseURL: `${config.app.baseUrl}${API_DESTINATION_CLUSTER}${id}`,
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
      type: UPDATE_DESTINATION_CLUSTER_SUCCESS,
      data,
    });
  } catch (error) {
    // update error to snackbar messaging
    yield put({
      type: SET_OPEN_SNACKBAR,
      data: { message: getErrorMessage(error) },
    });
    // update error to module reducer
    yield put({ type: UPDATE_DESTINATION_CLUSTER_FAILURE, error });
  }
}

export function* updateDestinationSaga({ token, payload, id }) {
  const options = {
    method: 'PUT',
    baseURL: `${config.app.baseUrl}${API_DESTINATION}${id}`,
    data: payload,
    headers: {
      Authorization: token,
    },
  };
  try {
    yield call(axios, options);
    // update reducer
    yield put({
      type: UPDATE_DESTINATION_SUCCESS,
    });
  } catch (error) {
    // update error to snackbar messaging
    yield put({
      type: SET_OPEN_SNACKBAR,
      data: { message: getErrorMessage(error) },
    });
    // update error to module reducer
    yield put({ type: UPDATE_DESTINATION_FAILURE, error });
  }
}
export function* destinationWatchers() {
  yield takeLatest(GET_DESTINATION_CLUSTER_REQUEST, getDestinationClusterSaga);
  yield takeLatest(
    UPDATE_DESTINATION_CLUSTER_REQUEST,
    updateDestinationClusterSaga,
  );
  yield takeLatest(UPDATE_DESTINATION_REQUEST, updateDestinationSaga);
}
