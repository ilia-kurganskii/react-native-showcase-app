import {
  createThemedStyleSheet,
  ExtendedTheme,
  TypographyPresets,
} from 'react-native-nucleus-ui';

import { HomeScreenTheme } from '~features/home/screens/home/home.theme';

export const getHomeStyle = createThemedStyleSheet(
  (theme: ExtendedTheme<HomeScreenTheme>) => ({
    title: {
      ...TypographyPresets.Title2,
      color: theme.homeScreen.title,
    },
    news_container: {
      paddingTop: 24,
      paddingHorizontal: 24,
    },
  })
);
