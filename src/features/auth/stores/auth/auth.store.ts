import { makeAutoObservable, observable } from 'mobx';

export class AuthStore {
  @observable
  public state: 'loading' | 'signedId' | 'unauthorized' = 'unauthorized';

  constructor() {
    makeAutoObservable(this);
  }

  loginByPassword(params: { login: string; password: string }) {
    let { login, password } = params;
    console.log(`Login: ${login} ${password}`);
    this.state = 'signedId';
  }
}

export const authStoreSingleton = new AuthStore();
