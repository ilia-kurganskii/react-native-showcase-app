import { SagaIterator } from 'redux-saga';
import { put, call, takeLatest, getContext } from 'redux-saga/effects';

import { FirebaseAuthService } from '~features/auth';
import { authActions } from '~features/auth/stores/auth/auth.slice';
import { TestIds } from '~features/common';
import { dialogsEffects } from '~features/dialogs/stores/dialogs/dialogs.effects';
import { dialogActions } from '~features/dialogs/stores/dialogs/dialogs.slice';
import { DialogParams } from '~features/dialogs/stores/dialogs/dialogs.type';

const LOGOUT_ID = 'logout';
const LogoutDialogParams: DialogParams = {
  id: 'logout',
  position: 'bottom',
  title: 'Do you want to logout?',
  message: 'We will miss you',
  actionButton: {
    id: LOGOUT_ID,
    testID: TestIds.Profile.LogoutDialog.LogoutButton,
    title: 'Logout',
  },
  secondButton: {
    id: 'cancel',
    title: 'Cancel',
  },
};

function* handleLogout(): SagaIterator {
  const result = yield call(dialogsEffects.showDialog, LogoutDialogParams);

  if (result === LOGOUT_ID) {
    const firebaseAuth: FirebaseAuthService = yield getContext('firebaseAuth');
    yield call(firebaseAuth.logout);
  }
  yield put(dialogActions.closeDialog({ id: LogoutDialogParams.id }));
}

function* handleLoginByEmail(
  action: ReturnType<typeof authActions.loginByEmail>
): SagaIterator {
  try {
    const firebaseAuth: FirebaseAuthService = yield getContext('firebaseAuth');
    yield call(firebaseAuth.loginByEmailAndPassword, {
      login: action.payload.email,
      password: action.payload.password,
    });
    yield put(authActions.loginByEmailFinished());
  } catch (e: unknown) {
    yield put(authActions.loginByEmailFinished());
    yield call(dialogsEffects.showErrorDialog, e);
  }
}

function* handleSignUpByEmail(
  action: ReturnType<typeof authActions.signUpByEmail>
): SagaIterator {
  try {
    const firebaseAuth: FirebaseAuthService = yield getContext('firebaseAuth');
    yield call(firebaseAuth.signUpEmailAndPassword, {
      login: action.payload.email,
      password: action.payload.password,
    });
    yield put(authActions.signUpByEmailFinished());
  } catch (e: unknown) {
    yield put(authActions.signUpByEmailFinished());
    yield call(dialogsEffects.showErrorDialog, e);
  }
}

export function* authSagas() {
  yield takeLatest(authActions.logout, handleLogout);
  yield takeLatest(authActions.loginByEmail, handleLoginByEmail);
  yield takeLatest(authActions.signUpByEmail, handleSignUpByEmail);
}
