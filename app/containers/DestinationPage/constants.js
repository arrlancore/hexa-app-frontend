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

export const LIST_CLUSTER_REQUEST =
  'HexaApp/DestinationPage/LIST_CLUSTER_REQUEST';
export const LIST_CLUSTER_SUCCESS =
  'HexaApp/DestinationPage/LIST_CLUSTER_SUCCESS';
export const LIST_CLUSTER_FAILURE =
  'HexaApp/DestinationPage/LIST_CLUSTER_FAILURE';

export const CREATE_CLUSTER_REQUEST =
  'HexaApp/DestinationPage/CREATE_CLUSTER_REQUEST';
export const CREATE_CLUSTER_SUCCESS =
  'HexaApp/DestinationPage/CREATE_CLUSTER_SUCCESS';
export const CREATE_CLUSTER_FAILURE =
  'HexaApp/DestinationPage/CREATE_CLUSTER_FAILURE';

export const UPDATE_CLUSTER_REQUEST =
  'HexaApp/DestinationPage/UPDATE_CLUSTER_REQUEST';
export const UPDATE_CLUSTER_SUCCESS =
  'HexaApp/DestinationPage/UPDATE_CLUSTER_SUCCESS';
export const UPDATE_CLUSTER_FAILURE =
  'HexaApp/DestinationPage/UPDATE_CLUSTER_FAILURE';

export const DELETE_CLUSTER_REQUEST =
  'HexaApp/DestinationPage/DELETE_CLUSTER_REQUEST';
export const DELETE_CLUSTER_SUCCESS =
  'HexaApp/DestinationPage/DELETE_CLUSTER_SUCCESS';
export const DELETE_CLUSTER_FAILURE =
  'HexaApp/DestinationPage/DELETE_CLUSTER_FAILURE';

export const CLUSTER_REQUEST = 'HexaApp/DestinationPage/CLUSTER_REQUEST';
export const CLUSTER_SUCCESS = 'HexaApp/DestinationPage/CLUSTER_SUCCESS';
export const CLUSTER_FAILURE = 'HexaApp/DestinationPage/CLUSTER_FAILURE';

export const DEFAULT_IMAGE =
  'https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2018/9/26/0/Original-Clint-Shannon_Outdoor-Activities_Mountain.jpg.rend.hgtvcom.966.725.suffix/1538017253250.jpeg';

// destination

export const DESTINATION_CLUSTER_REQUEST =
  'HexaApp/DestinationPage/DESTINATION_CLUSTER_REQUEST';
export const DESTINATION_CLUSTER_SUCCESS =
  'HexaApp/DestinationPage/DESTINATION_CLUSTER_SUCCESS';
export const DESTINATION_CLUSTER_FAILURE =
  'HexaApp/DestinationPage/DESTINATION_CLUSTER_FAILURE';

export const GET_DESTINATION_CLUSTER_REQUEST =
  'HexaApp/DestinationPage/GET_DESTINATION_CLUSTER_REQUEST';
export const GET_DESTINATION_CLUSTER_SUCCESS =
  'HexaApp/DestinationPage/GET_DESTINATION_CLUSTER_SUCCESS';
export const GET_DESTINATION_CLUSTER_FAILURE =
  'HexaApp/DestinationPage/GET_DESTINATION_CLUSTER_FAILURE';

export const UPDATE_DESTINATION_CLUSTER_REQUEST =
  'HexaApp/DestinationPage/UPDATE_DESTINATION_CLUSTER_REQUEST';
export const UPDATE_DESTINATION_CLUSTER_SUCCESS =
  'HexaApp/DestinationPage/UPDATE_DESTINATION_CLUSTER_SUCCESS';
export const UPDATE_DESTINATION_CLUSTER_FAILURE =
  'HexaApp/DestinationPage/UPDATE_DESTINATION_CLUSTER_FAILURE';

export const UPDATE_DESTINATION_REQUEST =
  'HexaApp/DestinationPage/UPDATE_DESTINATION_REQUEST';
export const UPDATE_DESTINATION_SUCCESS =
  'HexaApp/DestinationPage/UPDATE_DESTINATION_SUCCESS';
export const UPDATE_DESTINATION_FAILURE =
  'HexaApp/DestinationPage/UPDATE_DESTINATION_FAILURE';

export const DESTINATION_TYPE = [
  'Nature',
  'Market',
  'Historical',
  'Art & Culture',
];

export const SKIP_DETAIL = [
  'createdBy',
  'updatedBy',
  'createdAt',
  'updatedAt',
  '__v',
  '_id',
  '_id',
  'isRoot',
  'borders',
  'position',
];
