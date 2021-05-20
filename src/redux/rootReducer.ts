import { combineReducers } from '@reduxjs/toolkit';
import auth from './auth/slice';
import company from './company/slice';

export default combineReducers({
  auth,
  company
});
