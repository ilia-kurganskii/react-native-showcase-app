import { configureStore } from '@reduxjs/toolkit';
import { inject, injectable } from 'inversify';
import { useSelector } from 'react-redux';

import { authReducer, FirebaseAuthService } from '~features/auth';

import type { TypedUseSelectorHook } from 'react-redux';

export interface AppServices {
  firebaseAuth: FirebaseAuthService;
}

function createStore(services: AppServices) {
  return configureStore({
    reducer: {
      auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: services,
        },
        immutableCheck: true,
        serializableCheck: true,
      }),
  });
}

@injectable()
export class RootStore {
  public readonly store;

  @inject(FirebaseAuthService)
  private firebaseAuthService!: FirebaseAuthService;

  constructor() {
    const services: AppServices = {
      firebaseAuth: this.firebaseAuthService,
    };
    this.store = createStore(services);
  }
}

export type RootState = ReturnType<ReturnType<typeof createStore>['getState']>;
export type AppDispatch = ReturnType<
  ReturnType<typeof createStore>['dispatch']
>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
