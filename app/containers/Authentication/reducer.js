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
  SIGN_IN_SUCCESS,
  SIGN_IN_REQUEST,
  SIGN_IN_FAILURE,
  SIGN_OUT_SUCCESS,
} from './constants';

// The initial state of the App
export const initialState = {
  data: null,
  token: null,
  error: '',
  loading: false,
  isAuth: false,
};

/* eslint-disable default-case, no-param-reassign */
const authReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SIGN_IN_SUCCESS:
        draft.data = action.data;
        draft.loading = false;
        draft.isAuth = true;
        draft.token = action.token;
        break;
      case SIGN_IN_REQUEST:
        draft.loading = true;
        break;
      case SIGN_IN_FAILURE:
        draft.error = action.error;
        draft.loading = false;
        draft.isAuth = false;
        break;

      case SIGN_OUT_SUCCESS:
        draft.token = null;
        draft.data = null;
        draft.isAuth = false;
        localStorage.clear();
        break;
    }
  });

export default authReducer;
