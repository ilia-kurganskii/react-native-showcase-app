import { RouteProp, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { useTheme } from 'react-native-nucleus-ui';

import { NewsFlowParamList, SCREENS } from '~features/common';
import { useNewsStore } from '~features/home/stores/news';

import { getNewsDetailsStyles } from './news-details.style';
import { extendThemeWithNewsDetails } from './news-details.theme';

export function useNewsDetailsController() {
  const newsStore = useNewsStore();
  const theme = useTheme();
  const route = useRoute<RouteProp<NewsFlowParamList, SCREENS.NEWS_DETAILS>>();
  const { id } = route.params;
  useEffect(() => {
    newsStore.loadNewsDetails(id);
  }, [newsStore, id]);

  const news = newsStore.getNewsById(id);
  const styles = getNewsDetailsStyles(extendThemeWithNewsDetails(theme));

  return { news, styles };
}
