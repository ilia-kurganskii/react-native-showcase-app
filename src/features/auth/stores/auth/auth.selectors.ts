import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '~features/app';

export const isSignerIdSelector = createSelector(
  (state: RootState) => state.auth,
  (auth) => {
    return !!auth.user;
  }
);
