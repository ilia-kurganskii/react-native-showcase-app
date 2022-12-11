import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '~features/app';

const selectSelf = (state: RootState) => state.auth;

const selectIsSignedIn = createSelector(selectSelf, (auth) => {
  return !!auth.user;
});

const selectIsLoading = createSelector(selectSelf, (auth) => {
  return auth.isLoading;
});

export const authSelectors = {
  selectIsLoading,
  selectIsSignedIn,
};
