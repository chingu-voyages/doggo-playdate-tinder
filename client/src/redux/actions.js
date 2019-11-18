import axios from 'axios';

import { userActionTypes } from './actionTypes';

export const userRegisterRequest = () => ({
  type: userActionTypes.USER_REGISTER_REQUEST
});

export const userRegisterSuccess = user => ({
  type: userActionTypes.USER_REGISTER_SUCCESS,
  user
});

export const userRegisterFailure = errors => ({
  type: userActionTypes.USER_REGISTER_FAILURE,
  errors
});

export const userLoginRequest = () => ({
  type: userActionTypes.USER_LOGIN_REQUEST
});

export const userLoginSuccess = user => ({
  type: userActionTypes.USER_LOGIN_SUCCESS,
  user
});

export const userLoginFailure = errors => ({
  type: userActionTypes.USER_LOGIN_FAILURE,
  errors
});

export const userLogout = () => ({
  type: userActionTypes.USER_LOGOUT
});

const resolveAfter2Seconds = x => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    });
  }, 2000);
};

export const registerUser = registrationFormData => {
  return async dispatch => {
    // alert the app state that the register request has begun:
    dispatch(userRegisterRequest);

    // const result = await axios('/auth/register');
    const result = await resolveAfter2Seconds({
      user: { username: registrationFormData.username }
    });

    dispatch(userRegisterSuccess(result.user));
  };
};

export const loginUser = loginFormData => {
  return async dispatch => {
    // alert the app state that the login request has begun:
    dispatch(userLoginRequest);

    // const result = await axios('/auth/login');
    const result = await resolveAfter2Seconds({ user: { username: loginFormData.username } });

    dispatch(userLoginSuccess(result.user));
  };
};
