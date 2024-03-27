import { createSlice } from '@reduxjs/toolkit';
import { plansData } from '../data/data';

const initialState = {
  plans: plansData,
};

const plansSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {},
});

export default plansSlice.reducer;
