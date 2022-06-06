import { makeAutoObservable, observable } from 'mobx';

export class AuthStore {
  @observable
  public state: 'loading' | 'signedId' | 'unauthorized' = 'unauthorized';

  constructor() {
    makeAutoObservable(this);
  }
}

export const authStoreSingleton = new AuthStore();
