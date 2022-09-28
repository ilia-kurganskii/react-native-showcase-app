import { all } from 'redux-saga/effects';

import { newsSagas } from '~features/home';

export default function* rootSaga() {
  yield all([newsSagas()]);
}
