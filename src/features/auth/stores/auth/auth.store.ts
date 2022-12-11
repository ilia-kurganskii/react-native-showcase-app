import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { inject, injectable } from 'inversify';

import { RootStore } from '~features/app/stores/root/root.store';
import { FirebaseAuthService } from '~features/auth/services/firebase-auth-service';
import { LoggerService } from '~features/common';

import { authActions } from './auth.slice';

@injectable()
export class AuthStore {
  @inject(RootStore)
  private readonly rootStore!: RootStore;

  @inject(FirebaseAuthService)
  private readonly firebaseAuthService!: FirebaseAuthService;

  @inject(LoggerService)
  private readonly loggerService!: LoggerService;

  private unsubscribeFromAuthChanges: () => void = () => undefined;

  constructor() {}

  onCreate = () => {
    this.unsubscribeFromAuthChanges();
    this.unsubscribeFromAuthChanges =
      this.firebaseAuthService.subscribeToAuthChanges(this.updateAuthState);
  };

  onDestroy = () => {
    this.unsubscribeFromAuthChanges();
  };

  loginByEmailPassword = async (params: {
    login: string;
    password: string;
  }) => {
    await this.firebaseAuthService.loginByEmailAndPassword(params);
  };

  signUpEmailAndPassword = async (params: {
    login: string;
    password: string;
  }) => {
    await this.firebaseAuthService.signUpEmailAndPassword(params);
  };

  logout = async () => {
    await this.firebaseAuthService.logout();
  };

  private updateAuthState = (user: FirebaseAuthTypes.User | null) => {
    if (user) {
      this.rootStore.store.dispatch(
        authActions.updateAuthState({
          email: user.email!,
        })
      );
    } else {
      this.rootStore.store.dispatch(authActions.updateAuthState(null));
    }
  };
}
