import { Colors, extendTheme, Theme } from 'react-native-nucleus-ui';

export interface LoginScreenTheme {
  loginScreen: {
    textLabel: string;
    textError: string;
  };
}

const LOGIN_SCREEN_THEME_LIGHT: LoginScreenTheme = {
  loginScreen: {
    textLabel: Colors.ink.dark,
    textError: Colors.red.base,
  },
};

const LOGIN_SCREEN_THEME_DARK: LoginScreenTheme = {
  loginScreen: {
    textLabel: Colors.sky.white,
    textError: Colors.red.base,
  },
};

export function extendThemeWithLogin(theme: Theme) {
  return extendTheme<LoginScreenTheme>(theme, {
    light: LOGIN_SCREEN_THEME_LIGHT,
    dark: LOGIN_SCREEN_THEME_DARK,
  });
}
