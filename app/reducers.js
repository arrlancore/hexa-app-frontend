/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import snackbarMessageProvider from 'containers/SnackbarProvider/reducer';
import authReducer from 'containers/Authentication/reducer';
import listClusterReducer, {
  clusterReducer,
} from 'containers/HomePage/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    router: connectRouter(history),
    snackbarMessage: snackbarMessageProvider,
    auth: authReducer,
    listCluster: listClusterReducer,
    cluster: clusterReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
