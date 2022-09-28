import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '~features/app';

import { newsAdapter } from './news.slice';

const selectSelf = (state: RootState) => state.news;

const isLoading = createSelector(selectSelf, (news) => {
  return news.isLoading;
});

const currentPage = createSelector(selectSelf, (news) => {
  return news.currentPage;
});

const error = createSelector(selectSelf, (news) => {
  return news.error;
});

export const newsSelectors = {
  ...newsAdapter.getSelectors(selectSelf),
  isLoading,
  currentPage,
  error,
};
