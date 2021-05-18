import { createSlice } from '@reduxjs/toolkit';

interface IState {
  p: number;
}
const initialState: IState = {
  p: 0
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccountData(state, action) {
      state.p++;
    }
  }
});

export const {
  setAccountData
} = slice.actions;

export default slice.reducer;
