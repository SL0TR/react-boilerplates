import { createSlice, createAction } from '@reduxjs/toolkit';

const initState = {
  token: null,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState: initState,
  reducers: {
    login(state, { payload }) {
      state.token = payload;
    },
    logout(state) {
      state.token = null;
    },
  },
});

export const loginRequest = createAction('auth/login_request');
export const { login, logout } = AuthSlice.actions;

export default AuthSlice;
