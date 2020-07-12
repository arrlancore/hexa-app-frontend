import { all } from 'redux-saga/effects';

import { authenticationWatchers } from './containers/Authentication/saga';
/**
 * Root saga manages watcher lifecycle
 */
export default function* rootSaga() {
  yield all([authenticationWatchers()]);
}
