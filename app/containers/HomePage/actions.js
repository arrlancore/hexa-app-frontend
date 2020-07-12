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
  LIST_CLUSTER_REQUEST,
  CREATE_CLUSTER_REQUEST,
  UPDATE_CLUSTER_REQUEST,
  DELETE_CLUSTER_REQUEST,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {object} payload username & password
 *
 */

export function getListCluster(token) {
  return {
    type: LIST_CLUSTER_REQUEST,
    token,
  };
}

export function createCluster(token, payload) {
  return {
    type: CREATE_CLUSTER_REQUEST,
    token,
    payload,
  };
}

export function editCluster(token, id, payload) {
  return {
    type: UPDATE_CLUSTER_REQUEST,
    token,
    payload,
    id,
  };
}

export function deleteCluster(token, id) {
  return {
    type: DELETE_CLUSTER_REQUEST,
    token,
    id,
  };
}
