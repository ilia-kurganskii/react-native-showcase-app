import {
  NewsDetailsContentBlockResponse,
  NewsDetailsContentResponse,
  NewsSearchItemResponse,
} from '~features/home/services/news/news.type';

import { NewsItem } from './news.type';

function itemResponseToNewsItem(input: NewsSearchItemResponse): NewsItem {
  return {
    ...input,
    title: input.webTitle.trim(),
    thumbnail: input.fields?.thumbnail,
    content: [],
  };
}

function detailsResponseToNewsItem(
  input: NewsDetailsContentResponse
): NewsItem {
  return {
    ...input,
    title: input.webTitle.trim(),
    thumbnail: input.fields?.thumbnail,
    content: parseBlocks(input.blocks),
  };
}

function parseBlocks(blocks: NewsDetailsContentBlockResponse): string[] {
  return blocks.body.map((bodyBlock) => bodyBlock.bodyTextSummary);
}

export const NewsDTO = {
  itemResponseToNewsItem,
  detailsResponseToNewsItem,
};
