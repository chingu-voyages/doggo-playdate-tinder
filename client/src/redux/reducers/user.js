import { userActionTypes } from '../actionTypes';

const initialState = {
  user: {},
  isLoggingInUser: false,
  isRegisteringUser: false,
  authErrors: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.USER_REGISTER_REQUEST:
      return { ...state, isRegisteringUser: true };

    case userActionTypes.USER_REGISTER_SUCCESS:
      return { ...state, isRegisteringUser: false, user: action.user };

    case userActionTypes.USER_REGISTER_FAILURE:
      return { ...state, isRegisteringUser: false, authErrors: action.errors };

    case userActionTypes.USER_LOGIN_REQUEST:
      return { ...state, isLoggingInUser: true };

    case userActionTypes.USER_LOGIN_SUCCESS:
      return { ...state, isLoggingInUser: false, user: action.user };

    case userActionTypes.USER_LOGIN_FAILURE:
      return { ...state, isLoggingInUser: false, authErrors: action.errors };

    case userActionTypes.USER_LOGOUT:
      return { ...state, user: {} };

    default:
      return state;
  }
};
