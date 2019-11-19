import { userActionTypes } from '../actionTypes';

const initialState = {
  user: {},
  isFetchingUser: false,
  authErrors: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.USER_REGISTER_REQUEST:
      return { ...state, isFetchingUser: true };

    case userActionTypes.USER_REGISTER_SUCCESS:
      return { ...state, isFetchingUser: false, user: action.user };

    case userActionTypes.USER_REGISTER_FAILURE:
      return { ...state, isFetchingUser: false, authErrors: action.errors };

    case userActionTypes.USER_LOGIN_REQUEST:
      return { ...state, isFetchingUser: true };

    case userActionTypes.USER_LOGIN_SUCCESS:
      return { ...state, isFetchingUser: false, user: action.user };

    case userActionTypes.USER_LOGIN_FAILURE:
      return { ...state, isFetchingUser: false, authErrors: action.errors };

    case userActionTypes.USER_LOGOUT:
      return { ...state, user: {} };

    default:
      return state;
  }
};
