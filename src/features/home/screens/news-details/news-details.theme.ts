import { Colors, extendTheme, Theme } from 'react-native-nucleus-ui';

export interface NewsDetailsTheme {
  newsDetails: {
    title: string;
    text: string;
  };
}
export const PROFILE_SCREEN_THEME_LIGHT: NewsDetailsTheme = {
  newsDetails: {
    title: Colors.ink.darkest,
    text: Colors.ink.darkest,
  },
};

export const PROFILE_SCREEN_THEME_DARK: NewsDetailsTheme = {
  newsDetails: {
    title: Colors.sky.white,
    text: Colors.sky.white,
  },
};

export function extendThemeWithNewsDetails(theme: Theme) {
  return extendTheme<NewsDetailsTheme>(theme, {
    light: PROFILE_SCREEN_THEME_LIGHT,
    dark: PROFILE_SCREEN_THEME_DARK,
  });
}
