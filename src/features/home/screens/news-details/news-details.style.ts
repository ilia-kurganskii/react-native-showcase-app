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
    },
    title: {
      ...TypographyPresets.Title2,
      color: theme.newsDetails.title,
      alignSelf: 'center',
      textAlign: 'center',
      marginBottom: 24,
    },
    image: {
      width: '100%',
      height: 200,
      borderRadius: 4,
      marginBottom: 24,
    },
    text: {
      marginBottom: 12,
      paddingHorizontal: 24,
    },
  })
);
