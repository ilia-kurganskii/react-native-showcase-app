import { injectable } from 'inversify';
import { Client, gql } from 'urql';

import { AppConfiguration } from '~features/common';
import { PAGE_SIZE } from '~features/home/services/news/news.const';

import {
  GetNewsQuery,
  GetNewsQueryVariables,
  GetNewsByIdQuery,
  GetNewsByIdQueryVariables,
} from './news.service.types.gen';

const GetNews = gql`
  query GetNews($skip: Int!) {
    postCollection(skip: $skip) {
      items {
        sys {
          id
        }
        title
        author
        date
        thumbnail {
          url
        }
      }
    }
  }
`;

const GetNewsById = gql`
  query GetNewsById($id: String!) {
    post(id: $id) {
      sys {
        id
      }
      title
      author
      date
      thumbnail {
        url
      }
      content {
        json
      }
    }
  }
`;

@injectable()
export class NewsService {
  constructor(
    private readonly client = new Client({
      url:
        AppConfiguration.contentful.host +
        `/content/v1/spaces/${AppConfiguration.contentful.space}`,
      fetchOptions: {
        headers: {
          Authorization: `Bearer ${AppConfiguration.contentful.publicKey}`,
        },
      },
    })
  ) {}

  loadNews(options: { page: number }): Promise<GetNewsQuery> {
    return this.client
      .query<GetNewsQuery, GetNewsQueryVariables>(GetNews, {
        skip: options.page * PAGE_SIZE,
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
