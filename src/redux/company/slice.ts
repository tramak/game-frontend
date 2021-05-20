import { createSlice } from '@reduxjs/toolkit';
import { ICompanyState } from './interfaces';

const initialState: ICompanyState = {};

const slice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    setCompanies(state, action) {
      const data = action.payload;
      state.data = data;
    },
  }
});

export const {
  setCompanies
} = slice.actions;

export default slice.reducer;
