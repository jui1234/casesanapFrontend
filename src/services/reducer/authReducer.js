import { createReducer } from '@reduxjs/toolkit';
import actionTypes from '../actions/authConstant';

const initialState = {
  loggedIn: false,
  user: null,
};

export const authReducers = createReducer(initialState, (builder) => {
  builder
    .addCase(actionTypes.LOGIN_SUCCESS, (state, action) => {
      state.loggedIn = true;
      state.user = action.payload;
    })
    .addCase(actionTypes.LOGIN_FAILURE, (state, action) => {
      state.loggedIn = false;
    })
    .addCase(actionTypes.LOGOUT, (state, action) => {
      state.loggedIn = false;
      state.user = action.payload;
    });
});


export default authReducers;
