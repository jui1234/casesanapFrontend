// authActions.js
import actionTypes from './authConstant';

export const loginSuccess = (userData) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: userData,
  };
};

export const loginFailure = () => {
  return {
    type: actionTypes.LOGIN_FAILURE,
  };
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};
