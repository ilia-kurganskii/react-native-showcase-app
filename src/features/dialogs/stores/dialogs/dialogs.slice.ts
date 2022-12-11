import {
  createAction,
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import {
  DialogParams,
  DialogStateItem,
} from '~features/dialogs/stores/dialogs/dialogs.type';
import { creteDialogState } from '~features/dialogs/stores/dialogs/dialogs.utils';

export const dialogsAdapter = createEntityAdapter<DialogStateItem>({
  selectId: (news: DialogStateItem) => news.id,
});

const pressButton = createAction<{ dialogId: string; buttonId: string }>(
  'dialogs/pressButton'
);

const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState: dialogsAdapter.getInitialState({
    dialogIdCounter: 0,
  }),
  reducers: {
    addDialog(state, action: PayloadAction<{ dialog: DialogParams }>) {
      return dialogsAdapter.setOne(
        state,
        creteDialogState(action.payload.dialog)
      );
    },
    closeDialog(state, action: PayloadAction<{ id: string }>) {
      return dialogsAdapter.updateOne(state, {
        id: action.payload.id,
        changes: {
          isClosing: true,
        },
      });
    },
    closeAllDialogs(state) {
      return dialogsAdapter.removeAll(state);
    },
    removeDialog(state, action: PayloadAction<{ id: string }>) {
      return dialogsAdapter.removeOne(state, action.payload.id);
    },
  },
  extraReducers: {},
});

export const dialogActions = { ...dialogsSlice.actions, pressButton };
export const dialogReducer = dialogsSlice.reducer;
