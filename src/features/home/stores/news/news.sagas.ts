import { all, takeEvery, getContext, put, select } from 'redux-saga/effects';

import { NewsDTO } from '../../dto/news.dto';
import {
  GetNewsByIdQuery,
  GetNewsQuery,
  NewsService,
} from '../../services/news';
import { newsSelectors } from './news.selectors';
import { newsActions } from './news.slice';

function* loadNextNews() {
  const newsService: NewsService = yield getContext('news');
  const isLoading: boolean = yield select(newsSelectors.isLoading);
  const currentPage: number = yield select(newsSelectors.currentPage);
  if (isLoading) {
    return;
  }
  try {
    yield put(newsActions.newsLoadingStarted());
    const response: GetNewsQuery = yield newsService.loadNews({
      page: currentPage,
    });
    yield put(
      newsActions.appendNews({ news: NewsDTO.listServiceToStore(response) })
    );
  } finally {
    yield put(newsActions.newsLoadingFinished());
  }
}
function* loadNewsById(action: ReturnType<typeof newsActions.loadNewsById>) {
  const newsService: NewsService = yield getContext('news');
  try {
    yield put(newsActions.newsLoadingStarted());
    const response: GetNewsByIdQuery = yield newsService.loadNewsById({
      id: action.payload.id,
    });
    const newsItem = NewsDTO.detailsServiceToStore(response);
    if (newsItem) {
      yield put(
        newsActions.updateOneNews({
          newsItem,
        })
      );
    }
  } finally {
    yield put(newsActions.newsLoadingFinished());
  }
}

export function* newsSagas() {
  yield all([
    takeEvery(newsActions.loadNextNews, loadNextNews),
    takeEvery(newsActions.loadNewsById, loadNewsById),
  ]);
}
