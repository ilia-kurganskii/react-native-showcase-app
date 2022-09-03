import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { createThemedStyleSheet, Theme } from 'react-native-nucleus-ui';

import { selectStyles } from '~features/common/utils/select-styles';

const Fonts = {
  Bold: 'Inter-Bold',
  Medium: 'Inter-Medium',
  Regular: 'Inter-Regular',
  Italic: 'Inter-Italic',
  BoldItalic: 'Inter-BoldItalic',
} as const;

export const getStyles = createThemedStyleSheet(() => ({
  text_regular: {
    fontFamily: Fonts.Regular,
  },
  text_regular_italic: {
    fontFamily: Fonts.Italic,
  },
  text_bold: {
    fontFamily: Fonts.Bold,
  },
  text_bold_italic: {
    fontFamily: Fonts.BoldItalic,
  },
  underline: {
    textDecorationLine: 'underline',
  },
}));

export function getFontStyle(options: {
  bold: boolean;
  italic: boolean;
  underline: boolean;
  theme: Theme;
}): StyleProp<ViewStyle> {
  let { bold, theme, italic, underline } = options;

  const richNodeStyles = getStyles(theme);

  const styles: StyleProp<TextStyle> = selectStyles(
    richNodeStyles,
    {
      bold,
      italic,
      underline,
    },

    {
      underline: {
        underline: true,
      },
      text_regular: {
        bold: false,
        italic: false,
      },
      text_bold: {
        bold: true,
        italic: false,
      },
      text_bold_italic: {
        bold: true,
        italic: true,
      },
      text_regular_italic: {
        bold: false,
        italic: true,
      },
    }
  );

  return styles;
}
