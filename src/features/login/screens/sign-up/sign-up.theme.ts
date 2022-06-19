import { Colors, extendTheme, Theme } from 'react-native-nucleus-ui';

export interface SignUpScreenTheme {
  signUpScreen: {
    textLabel: string;
  };
}

const SIGNUP_SCREEN_THEME_LIGHT: SignUpScreenTheme = {
  signUpScreen: {
    textLabel: Colors.ink.dark,
  },
};

const SIGNUP_SCREEN_THEME_DARK: SignUpScreenTheme = {
  signUpScreen: {
    textLabel: Colors.sky.white,
  },
};

export function extendThemeWithSignUp(theme: Theme) {
  return extendTheme<SignUpScreenTheme>(theme, {
    light: SIGNUP_SCREEN_THEME_LIGHT,
    dark: SIGNUP_SCREEN_THEME_DARK,
  });
}
