import { createThemedStyleSheet, ExtendedTheme } from 'react-native-nucleus-ui';

import { RichTextTheme } from './rich-text.theme';

export const getRichTextStyle = createThemedStyleSheet(
  (theme: ExtendedTheme<RichTextTheme>) => ({
    heading1: {
      fontSize: 30,
      lineHeight: 35,
      marginBottom: 12,
    },
    heading2: {
      fontSize: 25,
      lineHeight: 32,
      marginBottom: 12,
    },
    heading3: {
      fontSize: 22,
      lineHeight: 28,
      marginBottom: 12,
    },
    heading4: {
      fontSize: 20,
      lineHeight: 26,
      marginBottom: 12,
    },
    heading5: {
      fontSize: 18,
      lineHeight: 23,
      marginBottom: 12,
    },
    heading6: {
      fontSize: 16,
      lineHeight: 20,
      marginBottom: 12,
    },
    paragraph: {
      marginBottom: 24,
    },
    text: {
      fontSize: 16,
      lineHeight: 30,
      color: theme.richText.text,
    },
    link: {
      color: theme.richText.link,
    },
    document: {
      flexDirection: 'column',
    },
    ul: {
      flexDirection: 'column',
      paddingLeft: 12,
    },
  })
);
