import {
  createThemedStyleSheet,
  ExtendedTheme,
  TypographyPresets,
} from 'react-native-nucleus-ui';

import { RichTextTheme } from './rich-text.theme';

export const getRichTextStyle = createThemedStyleSheet(
  (theme: ExtendedTheme<RichTextTheme>) => ({
    heading1: {
      ...TypographyPresets.Title1,
    },
    heading2: {
      ...TypographyPresets.Title2,
    },
    heading3: {
      ...TypographyPresets.Title3,
    },
    text: {
      color: theme.richText.text,
    },
  })
);
