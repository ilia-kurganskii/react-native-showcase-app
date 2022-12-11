import { all, takeLatest, delay, race, put, take } from 'redux-saga/effects';

import { dialogActions } from './dialogs.slice';

const MAX_ANIMATION_TIME = 10000;

function* closeDialog(action: ReturnType<typeof dialogActions.closeDialog>) {
  yield race([
    delay(MAX_ANIMATION_TIME),
    take(dialogActions.removeDialog),
    take(dialogActions.closeAllDialogs),
  ]);
  yield put(dialogActions.removeDialog({ id: action.payload.id }));
}

export function* dialogSagas() {
  yield all([takeLatest(dialogActions.closeDialog, closeDialog)]);
}
