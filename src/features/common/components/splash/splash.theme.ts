import { Colors, extendTheme, Theme } from 'react-native-nucleus-ui';

export interface SplashTheme {
  splashComponent: {
    background: string;
  };
}
export const SPLASH_THEME_LIGHT: SplashTheme = {
  splashComponent: {
    background: Colors.sky.white,
  },
};

export const SPLASH_THEME_DARK: SplashTheme = {
  splashComponent: {
    background: Colors.ink.darkest,
  },
};

export function extendThemeWithSplash(theme: Theme) {
  return extendTheme<SplashTheme>(theme, {
    light: SPLASH_THEME_LIGHT,
    dark: SPLASH_THEME_DARK,
  });
}
