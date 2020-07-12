/*
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * */

/*
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const SIGN_OUT = 'NemsDesktop/Authentication/SIGN_OUT';
export const SIGN_IN_REQUEST = 'NemsDesktop/Authentication/SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'NemsDesktop/Authentication/SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'NemsDesktop/Authentication/SIGN_IN_FAILURE';

export const SIGN_OUT_REQUEST = 'NemsDesktop/Authentication/SIGN_OUT_REQUEST';
export const SIGN_OUT_SUCCESS = 'NemsDesktop/Authentication/SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE = 'NemsDesktop/Authentication/SIGN_OUT_FAILURE';

export const TOKEN_KEY = '_app_user_token';
export const USER_KEY = '_app_user_data';

export const ALL_USER = '*';
