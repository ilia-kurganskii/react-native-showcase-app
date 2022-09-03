import { Document } from '@contentful/rich-text-types';

export interface NewsItem {
  id: string;
  title: string | null;
  thumbnail: string;
  content?: Document | null;
}
