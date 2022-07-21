import { Client, gql } from 'urql';

import {
  GetNewsQuery,
  GetNewsQueryVariables,
  GetNewsByIdQuery,
  GetNewsByIdQueryVariables,
} from './__generated__/news.service.generated';
import { NEWS_HOST } from './news.const';

const GetNews = gql`
  query GetNews($pageIndex: Int!) {
    storiesFeed(type: FEATURED, page: $pageIndex) {
      _id
      slug
      title
      coverImage
      author {
        name
      }
    }
  }
`;

const GetNewsById = gql`
  query GetNewsById($id: String!, $hostName: String!) {
    post(slug: $id, hostname: $hostName) {
      _id
      slug
      title
      coverImage
      contentMarkdown
      author {
        name
      }
    }
  }
`;

export class NewsService {
  constructor(
    private readonly client = new Client({
      url: NEWS_HOST,
    })
  ) {}

  loadNews(options: { page: number }): Promise<GetNewsQuery> {
    return this.client
      .query<GetNewsQuery, GetNewsQueryVariables>(GetNews, {
        pageIndex: options.page,
      })
      .toPromise()
      .then((response) => {
        if (response.error) {
          throw response.error;
        } else {
          return response.data!;
        }
      });
  }

  loadNewsById(options: { id: string }): Promise<GetNewsByIdQuery> {
    return this.client
      .query<GetNewsByIdQuery, GetNewsByIdQueryVariables>(GetNewsById, {
        id: options.id,
        hostName: NEWS_HOST,
      })
      .toPromise()
      .then((response) => {
        if (response.error) {
          throw response.error;
        } else {
          return response.data!;
        }
      });
  }
}

export const newsServiceSingleton = new NewsService();
