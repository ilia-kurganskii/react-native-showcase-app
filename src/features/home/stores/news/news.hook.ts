import { newsStoreInstance } from './news.private';

export function useNewsStore() {
  return newsStoreInstance;
}
