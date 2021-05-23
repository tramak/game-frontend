import { createSlice } from '@reduxjs/toolkit';
import { IUserState } from './interfaces';

const initialState: IUserState = {};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers(state, action) {
      const data = action.payload;
      state.list = data;
    },
    setUser(state, action) {
      const user = action.payload;
      state.userActive = user;
    },
    clearUser(state) {
      delete state.userActive;
    }
  }
});

export const {
  setUsers,
  setUser,
  clearUser,
} = slice.actions;

export default slice.reducer;
