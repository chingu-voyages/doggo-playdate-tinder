import userActionTypes from '../actionTypes';

const initialState = {
  user: {},
  isFetchingUser: false,
  authErrors: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    // LOADING CASES -- All can use the same execution block unless there are other states being altered
    case userActionTypes.USER_REGISTER_REQUEST:
    case userActionTypes.USER_LOGIN_REQUEST:
    case userActionTypes.USER_LOGOUT_REQUEST:
      return { ...state, isFetchingUser: true, authErrors: '' };

    // SUCCESS CASES
    case userActionTypes.USER_REGISTER_SUCCESS:
    case userActionTypes.USER_LOGIN_SUCCESS:
      return { ...state, isFetchingUser: false, user: action.user, authErrors: '' };

    case userActionTypes.USER_LOGOUT_SUCCESS:
      return { ...state, user: {}, isFetchingUser: false, authErrors: '' };

    // FAILURE CASES
    case userActionTypes.USER_REGISTER_FAILURE:
    case userActionTypes.USER_LOGIN_FAILURE:
    case userActionTypes.USER_LOGOUT_FAILURE:
      return { ...state, isFetchingUser: false, authErrors: action.errors };

    case userActionTypes.CLEAR_ERRORS:
      return {
        ...state,
        authErrors: null
      };
    default:
      return state;
  }
};
