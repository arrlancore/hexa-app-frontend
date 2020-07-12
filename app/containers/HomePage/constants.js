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

export const LIST_CLUSTER_REQUEST = 'HexaApp/HomePage/LIST_CLUSTER_REQUEST';
export const LIST_CLUSTER_SUCCESS = 'HexaApp/HomePage/LIST_CLUSTER_SUCCESS';
export const LIST_CLUSTER_FAILURE = 'HexaApp/HomePage/LIST_CLUSTER_FAILURE';

export const CREATE_CLUSTER_REQUEST = 'HexaApp/HomePage/CREATE_CLUSTER_REQUEST';
export const CREATE_CLUSTER_SUCCESS = 'HexaApp/HomePage/CREATE_CLUSTER_SUCCESS';
export const CREATE_CLUSTER_FAILURE = 'HexaApp/HomePage/CREATE_CLUSTER_FAILURE';

export const UPDATE_CLUSTER_REQUEST = 'HexaApp/HomePage/UPDATE_CLUSTER_REQUEST';
export const UPDATE_CLUSTER_SUCCESS = 'HexaApp/HomePage/UPDATE_CLUSTER_SUCCESS';
export const UPDATE_CLUSTER_FAILURE = 'HexaApp/HomePage/UPDATE_CLUSTER_FAILURE';

export const DELETE_CLUSTER_REQUEST = 'HexaApp/HomePage/DELETE_CLUSTER_REQUEST';
export const DELETE_CLUSTER_SUCCESS = 'HexaApp/HomePage/DELETE_CLUSTER_SUCCESS';
export const DELETE_CLUSTER_FAILURE = 'HexaApp/HomePage/DELETE_CLUSTER_FAILURE';

export const CLUSTER_REQUEST = 'HexaApp/HomePage/CLUSTER_REQUEST';
export const CLUSTER_SUCCESS = 'HexaApp/HomePage/CLUSTER_SUCCESS';
export const CLUSTER_FAILURE = 'HexaApp/HomePage/CLUSTER_FAILURE';

export const DEFAULT_IMAGE =
  'https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2018/9/26/0/Original-Clint-Shannon_Outdoor-Activities_Mountain.jpg.rend.hgtvcom.966.725.suffix/1538017253250.jpeg';
