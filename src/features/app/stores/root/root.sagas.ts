import { all, call, spawn } from 'redux-saga/effects';

import { authSagas } from '~features/auth/stores/auth/auth.sagas';
import { dialogSagas } from '~features/dialogs/stores/dialogs/dialogs.sagas';
import { newsSagas } from '~features/home/stores/news/news.sagas';

const sagas = [newsSagas, dialogSagas, authSagas];

export default function* rootSaga() {
  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}
