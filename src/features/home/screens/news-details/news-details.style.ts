import {
  createThemedStyleSheet,
  ExtendedTheme,
  TypographyPresets,
} from 'react-native-nucleus-ui';

import { NewsDetailsTheme } from './news-details.theme';

export const getNewsDetailsStyles = createThemedStyleSheet(
  (theme: ExtendedTheme<NewsDetailsTheme>) => ({
    scrollContainer: {
      flexDirection: 'column',
      paddingTop: 32,
      paddingHorizontal: 24,
    },
    title: {
      ...TypographyPresets.Title2,
      color: theme.newsDetails.title,
      marginBottom: 12,
    },
    image: {
      width: '100%',
      height: 200,
      borderRadius: 4,
      marginBottom: 24,
    },
    text: {
      ...TypographyPresets.Regular.Normal.Regular,
      marginBottom: 12,
      color: theme.newsDetails.text,
    },
  })
);
