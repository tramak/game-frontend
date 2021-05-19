import { createSlice } from '@reduxjs/toolkit';

interface IState {
  token?: {
    access: string;
  };
}
const initialState: IState = {
};

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
