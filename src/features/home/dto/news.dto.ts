import { GetNewsQuery, GetNewsByIdQuery } from '../services/news';
import { NewsItem } from '../stores/news';

function listServiceToStore(input: GetNewsQuery): NewsItem[] {
  if (!input.storiesFeed) {
    return [];
  }
  return input.storiesFeed.filter(Boolean).map((item) => ({
    id: item!.slug ?? item!._id,
    title: item!.title ?? null,
    thumbnail: item!.coverImage,
    pillarName: '',
  }));
}

function detailsServiceToStore(input: GetNewsByIdQuery): NewsItem | null {
  const { post } = input;
  if (!post) {
    return null;
  }

  return {
    id: post.slug ?? post._id,
    title: post.title ?? null,
    thumbnail: post.coverImage!,
    content: post.contentMarkdown,
  };
}

export const NewsDTO = {
  listServiceToStore,
  detailsServiceToStore,
};
