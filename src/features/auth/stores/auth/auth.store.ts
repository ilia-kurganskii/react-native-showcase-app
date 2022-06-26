import { makeAutoObservable, observable } from 'mobx';

import {
  FirebaseAuthService,
  UserState,
  firebaseAuthServiceSingleton,
} from '../services/firebase-auth-service';

export class AuthStore {
  @observable
  public state: 'loading' | 'signedIn' | 'unauthorized' = 'unauthorized';

  private unsubscribeFromAuthChanges: () => void = () => undefined;

  constructor(
    private readonly firebaseAuthService: FirebaseAuthService = firebaseAuthServiceSingleton
  ) {
    makeAutoObservable(this);
  }

  onCreate = () => {
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

  loginAnonymously = async () => {
    await this.firebaseAuthService.loginAnonymously();
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

  private updateAuthState = (userState: UserState) => {
    switch (userState) {
      case UserState.Logged:
        this.state = 'signedIn';
        break;
      case UserState.Anonymous:
        this.state = 'signedIn';
        break;
      case UserState.Unauthorized:
        this.state = 'unauthorized';
        break;
    }
  };
}

export const authStoreSingleton = new AuthStore();
