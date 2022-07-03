import {
  createThemedStyleSheet,
  ExtendedTheme,
  TypographyPresets,
} from 'react-native-nucleus-ui';

import { HomeScreenTheme } from '~features/home/screens/home/home.theme';

export const getNewsListItemStyle = createThemedStyleSheet(
  (theme: ExtendedTheme<HomeScreenTheme>) => ({
    container: {
      marginBottom: 24,
      flexDirection: 'row',
      flex: 1,
    },
    image: {
      width: 64,
      height: 64,
      marginRight: 16,
      borderRadius: 4,
      overflow: 'hidden',
    },
    text: {
      flex: 1,
    },
    text__title: {
      ...TypographyPresets.Small.Normal.Bold,
      color: theme.homeScreen.listItem.title,
    },
    text__subtitle: {
      ...TypographyPresets.Tiny.Normal.Regular,
      marginTop: 'auto',
      color: theme.homeScreen.listItem.subtitle,
    },
  })
);
