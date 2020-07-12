/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const ROLE_USER = 'user';
export const ROLE_ADMIN = 'admin';
export const ALL = '*';

export const LOGIN_PAGE = '/';
export const HOME_PAGE = '/home';
export const DESTINATION_PAGE = '/destination/:id';
