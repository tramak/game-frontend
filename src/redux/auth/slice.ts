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
    },
    setProfile(state, action) {
      state.profile = action.payload;
    },
    clearProfile(state) {
      delete state.profile;
    }
  }
});

export const {
  setToken,
  clearToken,
  setProfile,
  clearProfile
} = slice.actions;

export default slice.reducer;
