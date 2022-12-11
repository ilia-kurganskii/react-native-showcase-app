import { RootState } from '~features/app';

import { dialogsAdapter } from './dialogs.slice';

const selectSelf = (state: RootState) => state.dialogs;

export const dialogsSelectors = {
  ...dialogsAdapter.getSelectors(selectSelf),
};
