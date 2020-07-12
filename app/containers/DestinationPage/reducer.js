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
  GET_DESTINATION_CLUSTER_SUCCESS,
  GET_DESTINATION_CLUSTER_FAILURE,
  GET_DESTINATION_CLUSTER_REQUEST,
  UPDATE_DESTINATION_CLUSTER_SUCCESS,
  UPDATE_DESTINATION_CLUSTER_REQUEST,
  UPDATE_DESTINATION_CLUSTER_FAILURE,
  UPDATE_DESTINATION_FAILURE,
  UPDATE_DESTINATION_SUCCESS,
  UPDATE_DESTINATION_REQUEST,
} from './constants';

// The initial state of the App
export const initialState = {
  data: null,
  error: '',
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
export const destinationReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case UPDATE_DESTINATION_SUCCESS:
        draft.data = action.data;
        draft.loading = false;
        break;
      case UPDATE_DESTINATION_REQUEST:
        draft.loading = true;
        break;
      case UPDATE_DESTINATION_FAILURE:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export const destinationClusterReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_DESTINATION_CLUSTER_SUCCESS:
        draft.data = action.data;
        draft.loading = false;
        break;
      case GET_DESTINATION_CLUSTER_REQUEST:
        draft.loading = true;
        break;
      case GET_DESTINATION_CLUSTER_FAILURE:
        draft.error = action.error;
        draft.loading = false;
        break;

      case UPDATE_DESTINATION_CLUSTER_SUCCESS:
        draft.data = action.data;
        draft.loading = false;
        break;
      case UPDATE_DESTINATION_CLUSTER_REQUEST:
        draft.loading = true;
        break;
      case UPDATE_DESTINATION_CLUSTER_FAILURE:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default destinationClusterReducer;
