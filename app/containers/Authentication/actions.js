/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {object} payload username & password
 *
 */
export function userSignIn(payload) {
  return {
    type: SIGN_IN_REQUEST,
    payload,
  };
}

export function userSignOut() {
  return {
    type: SIGN_OUT_SUCCESS,
  };
}

export function userSignInSuccess(data, token) {
  return {
    type: SIGN_IN_SUCCESS,
    data,
    token,
  };
}
