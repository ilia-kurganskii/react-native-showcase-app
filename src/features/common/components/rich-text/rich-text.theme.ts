import { Colors, extendTheme, Theme } from 'react-native-nucleus-ui';

export interface RichTextTheme {
  richText: {
    text: string;
  };
}

const RICH_TEXT_THEME_LIGHT: RichTextTheme = {
  richText: {
    text: Colors.ink.darkest,
  },
};

const RICH_TEXT_THEME_DARK: RichTextTheme = {
  richText: {
    text: Colors.sky.white,
  },
};

export function extendThemeWithRichText(theme: Theme) {
  return extendTheme<RichTextTheme>(theme, {
    light: RICH_TEXT_THEME_LIGHT,
    dark: RICH_TEXT_THEME_DARK,
  });
}
