import { combineReducers } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import plansReducer from './plansSlice';

const rootReducer = combineReducers({
  users: usersReducer,
  plans: plansReducer,
});

export default rootReducer;
