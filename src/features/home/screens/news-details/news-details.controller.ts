import { RouteProp, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { useTheme } from 'react-native-nucleus-ui';

import { useAppSelector, useAppService } from '~features/app';
import { NewsFlowParamList, SCREENS } from '~features/common';
import { newsSelectors, NewsStore } from '~features/home';

import { getNewsDetailsStyles } from './news-details.style';
import { extendThemeWithNewsDetails } from './news-details.theme';

export function useNewsDetailsController() {
  const newsStore = useAppService(NewsStore);
  const theme = useTheme();
  const route = useRoute<RouteProp<NewsFlowParamList, SCREENS.NEWS_DETAILS>>();
  const { id } = route.params;
  useEffect(() => {
    newsStore.loadNewsDetails(id);
  }, [newsStore, id]);

  const news = useAppSelector((state) => newsSelectors.selectById(state, id));
  const styles = getNewsDetailsStyles(extendThemeWithNewsDetails(theme));

  return { news, styles };
}
