import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useMemo } from 'react';
import { useTheme } from 'react-native-nucleus-ui';

import { useAppSelector, useAppService } from '~features/app';
import { FLOWS, SCREENS } from '~features/common';
import { NewsStore } from '~features/home';
import { getHomeStyle } from '~features/home/screens/home/home.style';
import { newsSelectors } from '~features/home/stores/news/news.selectors';

import { extendThemeWithHome } from './home.theme';

export function useHomeController() {
  const newsStore = useAppService(NewsStore);
  const navigation = useNavigation();
  const theme = useTheme();
  const styles = getHomeStyle(extendThemeWithHome(theme));

  // Data from state
  const error = useAppSelector(newsSelectors.error);
  const news = useAppSelector(newsSelectors.selectAll);

  const headerNews = news[0];
  const otherNews = useMemo(() => news.slice(1), [news]);

  const openDetails = useCallback(
    (id: string) => {
      navigation.navigate(FLOWS.NEWS_DETAILS, {
        screen: SCREENS.NEWS_DETAILS,
        params: { id },
      });
    },
    [navigation]
  );

  useEffect(() => {
    newsStore.loadNextNews();
  }, [newsStore]);

  const isShowErrorPlaceholder = error && news.length === 0;

  return {
    styles,
    headerNews,
    openDetails,
    error,
    isShowErrorPlaceholder,
    loadMore: newsStore.loadNextNews,
    refresh: newsStore.refresh,
    isRefreshing: false,
    news: otherNews,
  };
}
