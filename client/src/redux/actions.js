import axios from 'axios';

import userActionTypes from './actionTypes';

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

export const getUserProfileSuccess = user => ({
  type: userActionTypes.GET_USER_PROFILE_SUCCESS,
  user
});

export const registerUser = registrationFormData => {
  return async dispatch => {
    // alert the app state that the register request has begun:
    dispatch(userRegisterRequest);

    // async mimic of backend API call
    const result = await axios.post('/api/users/register', registrationFormData);
    dispatch(userRegisterSuccess(result.data));
  };
};

export const clearErrors = () => ({
  type: userActionTypes.CLEAR_ERRORS
});

export const loginUser = loginFormData => {
  return async dispatch => {
    dispatch(await userLoginRequest());
    try {
      const response = await axios.post('/api/users/login', loginFormData);
      dispatch(userLoginSuccess(response.data));
    } catch (error) {
      dispatch(userLoginFailure(error.response.data.err));
    }
  };
};

export const getProfile = () => {
  return async dispatch => {
    const result = await axios.get('/api/users/profile');
    dispatch(getUserProfileSuccess(result.data));
  };
};

export const userLogoutRequest = () => ({
  type: userActionTypes.USER_LOGOUT_REQUEST
});
export const userLogoutSuccess = () => ({
  type: userActionTypes.USER_LOGOUT_SUCCESS
});
export const userLogoutFailure = errors => ({
  type: userActionTypes.USER_LOGOUT_FAILURE,
  errors
});

export const userLogout = () => {
  return async dispatch => {
    dispatch(userLogoutRequest());
    try {
      await axios.post('/api/users/logout');
      dispatch(userLogoutSuccess());
    } catch (err) {
      dispatch(userLogoutFailure(err.response.data.err));
    }
  };
};
