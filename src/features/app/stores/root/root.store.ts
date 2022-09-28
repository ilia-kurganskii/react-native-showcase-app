import { configureStore } from '@reduxjs/toolkit';
import { inject, injectable, postConstruct } from 'inversify';
import { useSelector } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import { authReducer, FirebaseAuthService } from '~features/auth';
import { NewsService } from '~features/home/services/news';
import { newsReducer } from '~features/home/stores/news/news.slice';

import rootSagas from './root.sagas';

import type { TypedUseSelectorHook } from 'react-redux';

export interface AppServices {
  firebaseAuth: FirebaseAuthService;
  news: NewsService;
}

@injectable()
export class RootStore {
  private _store!: ReturnType<typeof createStore>;

  @inject(FirebaseAuthService)
  private firebaseAuthService!: FirebaseAuthService;

  @inject(NewsService)
  private newsService!: NewsService;

  get store() {
    return this._store;
  }

  @postConstruct()
  onCreate() {
    const services: AppServices = {
      firebaseAuth: this.firebaseAuthService,
      news: this.newsService,
    };
    this._store = createStore(services);
  }
}

function createStore(services: AppServices) {
  const sagaMiddleware = createSagaMiddleware({
    context: services,
  });
  const store = configureStore({
    reducer: {
      auth: authReducer,
      news: newsReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: false,
        immutableCheck: true,
        serializableCheck: true,
      }).concat(sagaMiddleware),
  });
  sagaMiddleware.run(rootSagas);
  return store;
}

export type RootState = ReturnType<ReturnType<typeof createStore>['getState']>;
export type AppDispatch = ReturnType<
  ReturnType<typeof createStore>['dispatch']
>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
