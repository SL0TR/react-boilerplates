import { createSlice, createAction } from '@reduxjs/toolkit';

const initState = {
  idToken: null,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState: initState,
  reducers: {
    login(state, { payload }) {
      state.idToken = payload;
    },
    logout(state) {
      state.idToken = null;
    },
  },
});

export const loginRequest = createAction('auth/login_request');
export const { login } = AuthSlice.actions;

export default AuthSlice;
