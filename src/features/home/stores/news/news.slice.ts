import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import { NewsItem } from '~features/home/stores/news/news.type';

export const newsAdapter = createEntityAdapter<NewsItem>({
  selectId: (news: NewsItem) => news.id,
});

const newsSlice = createSlice({
  name: 'news',
  initialState: newsAdapter.getInitialState({
    isLoading: false,
    error: undefined,
    currentPage: 0,
  }),
  reducers: {
    loadNextNews() {},
    loadNewsById(_state, _action: PayloadAction<{ id: string }>) {},
    newsLoadingStarted(state) {
      state.isLoading = true;
    },
    newsLoadingFinished(state) {
      state.isLoading = false;
    },
    updateOneNews(state, action: PayloadAction<{ newsItem: NewsItem }>) {
      newsAdapter.setOne(state, action.payload.newsItem);
    },
    appendNews(state, action: PayloadAction<{ news: NewsItem[] }>) {
      newsAdapter.setAll(state, action.payload.news);
    },
  },
  extraReducers: {},
});

export const newsActions = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
