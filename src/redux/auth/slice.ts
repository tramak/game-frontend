import { createSlice } from '@reduxjs/toolkit';
import { IAuthState } from './interfaces';

const initialState: IAuthState = {};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action) {
      const { jwtToken } = action.payload;
      state.token = {
        access: jwtToken
      }
    },
    clearToken(state) {
      delete state.token;
    }
  }
});

export const {
  setToken,
  clearToken
} = slice.actions;

export default slice.reducer;
