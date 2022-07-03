import { Colors, extendTheme, Theme } from 'react-native-nucleus-ui';

export interface HomeScreenTheme {
  homeScreen: {
    title: string;
    listItem: {
      title: string;
      subtitle: string;
    };
  };
}
export const HOME_SCREEN_THEME_LIGHT: HomeScreenTheme = {
  homeScreen: {
    title: Colors.ink.darkest,
    listItem: {
      title: Colors.ink.darkest,
      subtitle: Colors.ink.light,
    },
  },
};

export const HOME_SCREEN_THEME_DARK: HomeScreenTheme = {
  homeScreen: {
    title: Colors.sky.white,
    listItem: {
      title: Colors.sky.white,
      subtitle: Colors.sky.dark,
    },
  },
};

export function extendThemeWithHome(theme: Theme) {
  return extendTheme<HomeScreenTheme>(theme, {
    light: HOME_SCREEN_THEME_LIGHT,
    dark: HOME_SCREEN_THEME_DARK,
  });
}
