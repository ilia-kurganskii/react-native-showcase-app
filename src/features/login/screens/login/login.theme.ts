import { Colors, extendTheme, Theme } from 'react-native-nucleus-ui';

export interface LoginScreenTheme {
  loginScreen: {
    textLabel: string;
  };
}

const LOGIN_SCREEN_THEME_LIGHT: LoginScreenTheme = {
  loginScreen: {
    textLabel: Colors.ink.dark,
  },
};

const LOGIN_SCREEN_THEME_DARK: LoginScreenTheme = {
  loginScreen: {
    textLabel: Colors.sky.white,
  },
};

export function extendThemeWithLogin(theme: Theme) {
  return extendTheme<LoginScreenTheme>(theme, {
    light: LOGIN_SCREEN_THEME_LIGHT,
    dark: LOGIN_SCREEN_THEME_DARK,
  });
}
