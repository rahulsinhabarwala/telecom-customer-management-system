import { createSlice } from '@reduxjs/toolkit';
import { usersData, plansData } from '../data/data';

const initialState = {
  users: usersData,
  plans: plansData,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.users.push(action.payload);
    },
    renewPlan: (state, action) => {
      const { userId } = action.payload;
      const user = state.users.find((user) => user.id === userId);
      if (user) {
        const plan = state.plans.find((plan) => plan.id === user.planId);
        if (plan) {
          // Assuming renewal sets planStatus to 'Active' and extends the renewalDate by the plan's validity
          user.planStatus = 'Active';
          const renewalDate = new Date(user.renewalDate);
          renewalDate.setDate(renewalDate.getDate() + plan.validity);
          user.renewalDate = renewalDate.toISOString().split('T')[0]; // Format YYYY-MM-DD
        }
      }
    },
    updatePlan: (state, action) => {
      const { userId, planId } = action.payload;
      const userIndex = state.users.findIndex((user) => user.id === userId);
      if (userIndex !== -1) {
        state.users[userIndex].planId = planId;
      }
    },
  },
});

export const { addCustomer, renewPlan, updatePlan } = usersSlice.actions;

export default usersSlice.reducer;
