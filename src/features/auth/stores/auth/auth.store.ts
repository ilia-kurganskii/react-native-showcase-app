import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { computed, makeAutoObservable, observable } from 'mobx';

import {
  FirebaseAuthService,
  firebaseAuthServiceSingleton,
} from '../services/firebase-auth-service';

export class AuthStore {
  @observable
  public user: FirebaseAuthTypes.User | null | undefined = undefined;

  private unsubscribeFromAuthChanges: () => void = () => undefined;

  @computed
  get state(): 'loading' | 'signedIn' | 'unauthorized' {
    if (this.user === undefined) {
      return 'loading';
    }
    if (this.user === null) {
      return 'unauthorized';
    }
    return 'signedIn';
  }

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

  private updateAuthState = (user: FirebaseAuthTypes.User | null) => {
    this.user = user;
  };
}

export const authStoreSingleton = new AuthStore();
