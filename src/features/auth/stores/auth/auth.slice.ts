import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppUser } from './auth.types';

export interface AuthState {
  user: AppUser | null | undefined;
  isLoading: boolean;
}

// Define the initial state using that type
const initialState: AuthState = {
  user: undefined,
  isLoading: false,
};

const logout = createAction('auth/logout');

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUpByEmail: (
      state,
      _: PayloadAction<{ email: string; password: string }>
    ) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    signUpByEmailFinished: (state) => {
      return {
        ...state,
        isLoading: false,
      };
    },
    loginByEmail: (
      state,
      _: PayloadAction<{ email: string; password: string }>
    ) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    loginByEmailFinished: (state) => {
      return {
        ...state,
        isLoading: false,
      };
    },
    updateAuthState: (state, action: PayloadAction<AppUser | null>) => {
      return {
        ...state,
        user: action.payload,
      };
    },
  },
});

export const authActions = { ...authSlice.actions, logout };
export const authReducer = authSlice.reducer;
