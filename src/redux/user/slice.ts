import { createSlice } from '@reduxjs/toolkit';
import { IUserState } from './interfaces';

const initialState: IUserState = {};

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action) {
      const data = action.payload;
      state.list = data;
    },
  }
});

export const {
  setUsers
} = slice.actions;

export default slice.reducer;
