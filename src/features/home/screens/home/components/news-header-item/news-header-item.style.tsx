import {
  createThemedStyleSheet,
  ExtendedTheme,
  TypographyPresets,
} from 'react-native-nucleus-ui';

import { HomeScreenTheme } from '~features/home/screens/home/home.theme';

export const getNewsHeaderItemStyle = createThemedStyleSheet(
  (theme: ExtendedTheme<HomeScreenTheme>) => ({
    container: {
      marginBottom: 32,
    },
    title: {
      ...TypographyPresets.Title2,
      color: theme.homeScreen.title,
      marginBottom: 24,
    },
    image: {
      width: '100%',
      height: 200,
      marginBottom: 12,
      borderRadius: 4,
      overflow: 'hidden',
    },
    text__title: {
      ...TypographyPresets.Regular.Normal.Bold,
      color: theme.homeScreen.listItem.title,
      marginBottom: 8,
    },
    text__subtitle: {
      ...TypographyPresets.Tiny.Normal.Regular,
      color: theme.homeScreen.listItem.subtitle,
    },
  })
);
