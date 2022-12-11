import { SagaIterator } from 'redux-saga';
import { call, put, race, take } from 'redux-saga/effects';

import { dialogActions } from '~features/dialogs/stores/dialogs/dialogs.slice';
import { DialogParams } from '~features/dialogs/stores/dialogs/dialogs.type';
import { takeDialogAction } from '~features/dialogs/stores/dialogs/dialogs.utils';

function* showDialog<T extends string>(
  dialog: DialogParams<T>
): SagaIterator<T> {
  yield put(dialogActions.addDialog({ dialog }));
  const { pressButton, closeAll, close } = yield race({
    pressButton: takeDialogAction(dialog.id, dialogActions.pressButton),
    close: takeDialogAction(dialog.id, dialogActions.closeDialog),
    closeAll: take(dialogActions.closeAllDialogs),
  });

  return getResultFromAction({ closeAll, close, pressButton }) as T;
}

function* showErrorDialog(e: unknown) {
  const message = e instanceof Error ? e.message : 'Try again later';
  yield call(showDialog, {
    id: 'error',
    title: 'Something went wrong',
    message: message,
    actionButton: {
      id: 'ok',
      title: 'Okay',
    },
  });
  yield put(dialogActions.closeDialog({ id: 'error' }));
}

function getResultFromAction(actions: {
  pressButton: ReturnType<typeof dialogActions.pressButton> | undefined;
  close: ReturnType<typeof dialogActions.closeDialog> | undefined;
  closeAll: ReturnType<typeof dialogActions.closeAllDialogs> | undefined;
}): string | 'close' {
  let { pressButton } = actions;
  if (pressButton) {
    return pressButton.payload.buttonId;
  }
  return 'close';
}

export const dialogsEffects = {
  showDialog,
  showErrorDialog,
};
