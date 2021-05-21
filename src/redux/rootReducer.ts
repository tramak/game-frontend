import { combineReducers } from '@reduxjs/toolkit';
import auth from './auth/slice';
import company from './company/slice';
import user from './user/slice';

export default combineReducers({
  auth,
  company,
  user
});
