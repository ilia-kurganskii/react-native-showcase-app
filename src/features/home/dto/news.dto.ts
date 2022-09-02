import { GetNewsQuery, GetNewsByIdQuery } from '../services/news';
import { NewsItem } from '../stores/news';

function listServiceToStore(input: GetNewsQuery): NewsItem[] {
  if (!input.postCollection) {
    return [];
  }
  return input.postCollection.items.map((inputItem) => ({
    id: inputItem!.sys.id,
    title: inputItem!.title!,
    thumbnail: inputItem!.thumbnail!.url!,
  }));
}

function detailsServiceToStore(inputItem: GetNewsByIdQuery): NewsItem | null {
  const { post } = inputItem;
  if (!post) {
    return null;
  }

  return {
    id: post.sys.id,
    title: post.title!,
    content: post.content?.json,
    thumbnail: post.thumbnail!.url!,
  };
}

export const NewsDTO = {
  listServiceToStore,
  detailsServiceToStore,
};
