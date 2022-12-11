import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { inject, injectable } from 'inversify';

import { LoggerService } from '~features/common';

@injectable()
export class FirebaseAuthService {
  @inject(LoggerService)
  private readonly logger!: LoggerService;

  constructor() {}

  subscribeToAuthChanges(
    listener: (user: FirebaseAuthTypes.User | null) => void
  ): () => void {
    return auth().onAuthStateChanged(listener);
  }

  loginByEmailAndPassword = async (params: {
    login: string;
    password: string;
  }) => {
    this.logger.info('Login with email: ' + params.login);
    await auth().signInWithEmailAndPassword(params.login, params.password);
  };

  loginAnonymously = async () => {
    await auth().signInAnonymously();
  };

  signUpEmailAndPassword = async (params: {
    login: string;
    password: string;
  }) => {
    await auth().createUserWithEmailAndPassword(params.login, params.password);
  };

  logout = async () => {
    await auth().signOut();
  };
}
