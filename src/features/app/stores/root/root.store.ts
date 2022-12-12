import { configureStore } from '@reduxjs/toolkit';
import * as Sentry from '@sentry/react';
import { inject, injectable, postConstruct } from 'inversify';
import { useSelector } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import { authReducer, FirebaseAuthService } from '~features/auth';
import { dialogReducer } from '~features/dialogs/stores/dialogs/dialogs.slice';
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
  const sentryReduxEnhancer = Sentry.createReduxEnhancer({});

  const store = configureStore({
    reducer: {
      auth: authReducer,
      news: newsReducer,
      dialogs: dialogReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: false,
        immutableCheck: true,
        serializableCheck: true,
      }).concat(sagaMiddleware),
    enhancers: (defaultEnhancers) =>
      defaultEnhancers.concat(sentryReduxEnhancer),
  });
  sagaMiddleware.run(rootSagas);
  return store;
}

export type RootState = ReturnType<ReturnType<typeof createStore>['getState']>;
export type AppDispatch = ReturnType<
  ReturnType<typeof createStore>['dispatch']
>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
