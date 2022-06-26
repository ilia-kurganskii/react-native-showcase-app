import { Colors, Theme, extendTheme } from 'react-native-nucleus-ui';

export interface SignUpScreenTheme {
  signUpScreen: {
    textLabel: string;
    textError: string;
  };
}

const SIGNUP_SCREEN_THEME_LIGHT: SignUpScreenTheme = {
  signUpScreen: {
    textLabel: Colors.ink.dark,
    textError: Colors.red.base,
  },
};

const SIGNUP_SCREEN_THEME_DARK: SignUpScreenTheme = {
  signUpScreen: {
    textLabel: Colors.sky.white,
    textError: Colors.red.base,
  },
};

export function extendThemeWithSignUp(theme: Theme) {
  return extendTheme<SignUpScreenTheme>(theme, {
    light: SIGNUP_SCREEN_THEME_LIGHT,
    dark: SIGNUP_SCREEN_THEME_DARK,
  });
}
