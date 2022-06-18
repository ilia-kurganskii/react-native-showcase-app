import auth from '@react-native-firebase/auth';

export enum UserState {
  Logged,
  Anonymous,
  Unauthorized,
}

export class FirebaseAuthService {
  subscribeToAuthChanges(listener: (state: UserState) => void): () => void {
    return auth().onAuthStateChanged((user) => {
      if (user) {
        if (user.isAnonymous) {
          listener(UserState.Anonymous);
        } else {
          listener(UserState.Logged);
        }
      } else {
        listener(UserState.Unauthorized);
      }
    });
  }

  loginByEmailAndPassword = async (params: {
    login: string;
    password: string;
  }) => {
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

export const firebaseAuthServiceSingleton = new FirebaseAuthService();
