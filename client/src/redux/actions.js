import axios from 'axios';

import { userActionTypes } from './actionTypes';

export const userRegisterRequest = () => ({
  type: userActionTypes.USER_REGISTER_REQUEST
});

export const userRegisterSuccess = user => ({
  type: userActionTypes.USER_REGISTER_SUCCESS,
  user
});

export const userRegisterFailure = () => ({
  type: userActionTypes.USER_REGISTER_FAILURE
});

export const userLoginRequest = () => ({
  type: userActionTypes.USER_LOGIN_REQUEST
});

export const userLoginSuccess = user => ({
  type: userActionTypes.USER_LOGIN_SUCCESS,
  user
});

export const userLoginFailure = () => ({
  type: userActionTypes.USER_LOGIN_FAILURE
});

export const userLogout = () => ({
  type: userActionTypes.USER_LOGOUT
});

export const registerUser = () => {
  return async dispatch => {
    // alert the app state that the register request has begun:
    dispatch(userRegisterRequest);

    const result = await axios('/auth/register');
    dispatch(userRegisterSuccess(result.user));
  };
};

export const loginUser = () => {
  return async dispatch => {
    // alert the app state that the login request has begun:
    dispatch(userLoginRequest);

    const result = await axios('/auth/login');
    dispatch(userLoginSuccess(result.user));
  };
};
