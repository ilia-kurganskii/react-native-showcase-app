import axios from 'axios';

import { AppConfiguration } from '~features/common';
import { NEWS_HOST, PAGE_SIZE } from '~features/home/services/news/news.const';
import {
  NewsDetailsResponse,
  NewsSearchListResponse,
} from '~features/home/services/news/news.type';

export class NewsService {
  constructor(
    private readonly httpService = axios.create({
      baseURL: NEWS_HOST,
      headers: {
        'content-type': 'application/json',
      },
    })
  ) {}

  async loadNews(params: { page: number }): Promise<NewsSearchListResponse> {
    return this.httpService
      .get<NewsSearchListResponse>('/search', {
        params: {
          'api-key': AppConfiguration.NewsKeyAPI,
          'show-fields': 'thumbnail',
          'page-size': PAGE_SIZE,
          'page': params.page,
        },
      })
      .then((response) => response.data);
  }

  async loadNewsById(params: { id: string }): Promise<NewsDetailsResponse> {
    return this.httpService
      .get(`/${params.id}`, {
        params: {
          'api-key': AppConfiguration.NewsKeyAPI,
          'show-blocks': 'all',
          'show-fields': 'thumbnail',
        },
      })
      .then((response) => response.data);
  }
}

export const newsServiceSingleton = new NewsService();
