import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from 'mobx';

import { NewsDTO } from '~features/home/stores/news/news.dto';

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
      const news = await this.newsService.loadNews({
        page: this.currentPage + 1,
      });
      runInAction(() => {
        if (this.currentPage === 0) {
          this.newsIds = [];
        }
        news.response.results
          .filter((newsItem) => newsItem.fields?.thumbnail)
          .forEach((newsItem) => {
            // only create
            if (!this.newsMap.has(newsItem.id)) {
              this.newsMap.set(
                newsItem.id,
                NewsDTO.itemResponseToNewsItem(newsItem)
              );
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
    if (this.isDetailsExist(id)) {
      return;
    }
    const data = await this.newsService.loadNewsById({
      id,
    });
    runInAction(() => {
      this.newsMap.set(
        id,
        NewsDTO.detailsResponseToNewsItem(data.response.content)
      );
    });
  }

  private isDetailsExist(id: string) {
    return this.newsMap.has(id) && this.newsMap.get(id)!.content.length > 0;
  }
}
