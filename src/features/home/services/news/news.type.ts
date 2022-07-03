export interface NewsSearchItemResponse {
  id: string;
  sectionId: string;
  webTitle: string;
  pillarName: string;
  fields: {
    thumbnail: string;
  };
}

export interface NewsSearchListResponse {
  response: {
    currentPage: number;
    pages: number;
    results: NewsSearchItemResponse[];
  };
}

export interface NewsDetailsContentBlockResponse {
  body: {
    bodyTextSummary: string;
    published: true;
  }[];
  totalBodyBlocks: number;
}

export interface NewsDetailsContentResponse {
  id: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  pillarName: string;
  fields: {
    thumbnail: string;
  };
  blocks: NewsDetailsContentBlockResponse;
}

export interface NewsDetailsResponse {
  response: {
    currentPage: number;
    pages: number;
    content: NewsDetailsContentResponse;
  };
}
