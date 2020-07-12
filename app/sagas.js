import { all } from 'redux-saga/effects';

import { authenticationWatchers } from './containers/Authentication/saga';
import { homeWatchers } from './containers/HomePage/saga';
import { destinationWatchers } from './containers/DestinationPage/saga';
/**
 * Root saga manages watcher lifecycle
 */
export default function* rootSaga() {
  yield all([authenticationWatchers(), homeWatchers(), destinationWatchers()]);
}
