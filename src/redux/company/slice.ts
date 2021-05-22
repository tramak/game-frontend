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
    setCompany(state, action) {
      const company = action.payload;
      state.companyActive = company;
    },
    clearCompany(state) {
      delete state.companyActive;
    }
  }
});

export const {
  setCompanies,
  setCompany,
  clearCompany
} = slice.actions;

export default slice.reducer;
