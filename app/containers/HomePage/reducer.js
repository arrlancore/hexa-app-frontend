/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  CLUSTER_REQUEST,
  CLUSTER_FAILURE,
  CLUSTER_SUCCESS,
  LIST_CLUSTER_REQUEST,
  LIST_CLUSTER_FAILURE,
  LIST_CLUSTER_SUCCESS,
  CREATE_CLUSTER_FAILURE,
  CREATE_CLUSTER_SUCCESS,
  CREATE_CLUSTER_REQUEST,
  UPDATE_CLUSTER_FAILURE,
  UPDATE_CLUSTER_SUCCESS,
  UPDATE_CLUSTER_REQUEST,
  DELETE_CLUSTER_FAILURE,
  DELETE_CLUSTER_SUCCESS,
  DELETE_CLUSTER_REQUEST,
} from './constants';

// The initial state of the App
export const initialState = {
  data: null,
  error: '',
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
export const clusterReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CLUSTER_SUCCESS:
        draft.data = action.data;
        draft.loading = false;
        break;
      case CLUSTER_REQUEST:
        draft.loading = true;
        break;
      case CLUSTER_FAILURE:
        draft.error = action.error;
        draft.loading = false;
        break;

      case CREATE_CLUSTER_SUCCESS:
        draft.data = action.data;
        draft.loading = false;
        break;
      case CREATE_CLUSTER_REQUEST:
        draft.loading = true;
        break;
      case CREATE_CLUSTER_FAILURE:
        draft.error = action.error;
        draft.loading = false;
        break;

      case UPDATE_CLUSTER_SUCCESS:
        draft.data = action.data;
        draft.loading = false;
        break;
      case UPDATE_CLUSTER_REQUEST:
        draft.loading = true;
        break;
      case UPDATE_CLUSTER_FAILURE:
        draft.error = action.error;
        draft.loading = false;
        break;

      case DELETE_CLUSTER_SUCCESS:
        draft.data = action.data;
        draft.loading = false;
        break;
      case DELETE_CLUSTER_REQUEST:
        draft.loading = true;
        break;
      case DELETE_CLUSTER_FAILURE:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export const listClusterReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LIST_CLUSTER_SUCCESS:
        draft.data = action.data;
        draft.loading = false;
        break;
      case LIST_CLUSTER_REQUEST:
        draft.loading = true;
        break;
      case LIST_CLUSTER_FAILURE:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default listClusterReducer;
