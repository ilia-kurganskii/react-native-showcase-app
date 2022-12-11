import { inject, injectable } from 'inversify';

import { RootStore } from '~features/app/stores/root/root.store';

import { newsActions } from './news.slice';

@injectable()
export class NewsStore {
  @inject(RootStore)
  private readonly rootStore!: RootStore;

  constructor() {}

  loadNextNews = () => {
    this.rootStore.store.dispatch(newsActions.loadNextNews());
  };

  refresh = () => {
    this.loadNextNews();
  };

  loadNewsDetails = (id: string) => {
    this.rootStore.store.dispatch(newsActions.loadNewsById({ id }));
  };
}
