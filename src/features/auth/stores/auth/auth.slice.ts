import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppUser } from './auth.types';

export interface AuthState {
  user: AppUser | null | undefined;
}

// Define the initial state using that type
const initialState: AuthState = {
  user: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAuthState: (state, action: PayloadAction<AppUser | null>) => {
      return {
        ...state,
        user: action.payload,
      };
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
