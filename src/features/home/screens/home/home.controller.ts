import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { useTheme } from 'react-native-nucleus-ui';

import { FLOWS, SCREENS } from '~features/common';
import { useErrorHandler } from '~features/common/hooks/use-error-handler';
import { getHomeStyle } from '~features/home/screens/home/home.style';

import { useNewsStore } from '../../stores/news';
import { extendThemeWithHome } from './home.theme';

export function useHomeController() {
  const newsStore = useNewsStore();
  const navigation = useNavigation();
  const errorHandler = useErrorHandler();
  const theme = useTheme();
  const styles = getHomeStyle(extendThemeWithHome(theme));
  const [isRefreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const openDetails = useCallback(
    (id: string) => {
      navigation.navigate(FLOWS.NEWS_DETAILS, {
        screen: SCREENS.NEWS_DETAILS,
        params: { id },
      });
    },
    [navigation]
  );

  const loadNextNews = useCallback(async () => {
    try {
      await newsStore.loadNextNews();
    } catch (e) {
      errorHandler(e);
    }
  }, [newsStore, errorHandler]);

  const refresh = useCallback(async () => {
    try {
      setRefreshing(true);
      await newsStore.reload();
    } catch (e) {
      errorHandler(e);
    } finally {
      setRefreshing(false);
    }
  }, [newsStore, errorHandler]);

  useEffect(() => {
    loadNextNews().catch((e) => {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        errorHandler(e);
      }
    });
  }, [loadNextNews, errorHandler, setError]);

  const isShowErrorPlaceholder = error && newsStore.news.length === 0;

  const headerNews = newsStore.news[0];
  return {
    styles,
    headerNews,
    openDetails,
    error,
    isShowErrorPlaceholder,
    loadMore: loadNextNews,
    refresh,
    isRefreshing,
    news: newsStore.news.slice(1),
  };
}
