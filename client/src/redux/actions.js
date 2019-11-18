// import axios from 'axios';

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

// this is a dummy async function to mimic a backend API call to login/register user. please remove when the backend is in place.
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

    // async mimic of backend API call
    const result = await resolveAfter2Seconds({
      user: { email: registrationFormData.email }
    });

    dispatch(userRegisterSuccess(result.user));
  };
};

export const loginUser = loginFormData => {
  return async dispatch => {
    // alert the app state that the login request has begun:
    dispatch(userLoginRequest());

    // async mimic of backend API call
    const result = await resolveAfter2Seconds({ user: { email: loginFormData.email } });

    dispatch(userLoginSuccess(result.user));
  };
};
