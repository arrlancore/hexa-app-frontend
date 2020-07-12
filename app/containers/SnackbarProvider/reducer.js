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
  DEFAULT_DURATION,
  SET_OPEN_SNACKBAR,
  SET_CLOSE_SNACKBAR,
} from './constants';

// The initial state of the App
export const initialState = {
  message: null,
  duration: DEFAULT_DURATION,
  type: 'error',
};

/* eslint-disable default-case, no-param-reassign */
const snackbarMessageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_OPEN_SNACKBAR:
        draft.message = action.data.message;
        draft.type = action.data.type || initialState.type;
        draft.duration = action.data.duration || initialState.duration;
        break;
      case SET_CLOSE_SNACKBAR:
        draft.message = null;
        break;
    }
  });

export default snackbarMessageReducer;
