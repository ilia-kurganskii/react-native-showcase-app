import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from 'mobx';

import { NewsDTO } from '../../dto/news.dto';
import { NewsService, newsServiceSingleton } from '../../services/news';
import { NewsItem } from './news.type';

export class NewsStore {
  private isLoading = false;
  private currentPage = 0;

  @observable
  private newsMap: Map<string, NewsItem> = new Map();

  @observable
  private newsIds: string[] = [];

  @computed
  get news(): NewsItem[] {
    return this.newsIds
      .map((id) => this.newsMap.get(id))
      .filter(Boolean) as NewsItem[];
  }

  constructor(
    private readonly newsService: NewsService = newsServiceSingleton
  ) {
    makeObservable(this);
  }

  getNewsById(id: string) {
    return this.newsMap.get(id);
  }

  @action
  async loadNextNews() {
    if (this.isLoading) {
      return;
    }
    if (this.currentPage > 2) {
      console.debug('We should load no more than 2 page to keep API response');
      return;
    }
    this.isLoading = true;
    try {
      const response = await this.newsService.loadNews({
        page: this.currentPage,
      });
      runInAction(() => {
        if (this.currentPage === 0) {
          this.newsIds = [];
        }
        NewsDTO.listServiceToStore(response).forEach((newsItem) => {
          // only create
          if (!this.newsMap.has(newsItem.id)) {
            this.newsMap.set(newsItem.id, newsItem);
          }
          this.newsIds.push(newsItem.id);
        });
      });
      this.currentPage = this.currentPage + 1;
    } finally {
      this.isLoading = false;
    }
  }

  @action
  async reload() {
    this.currentPage = 0;
    await this.loadNextNews();
  }

  @action
  async loadNewsDetails(id: string): Promise<void> {
    if (this.isDetailsLoaded(id)) {
      return;
    }
    const data = await this.newsService.loadNewsById({
      id,
    });
    const item = NewsDTO.detailsServiceToStore(data);
    if (item) {
      runInAction(() => {
        this.newsMap.set(id, item);
      });
    }
  }

  private isDetailsLoaded(id: string): boolean {
    const item = this.newsMap.get(id);
    return !!item?.content;
  }
}
