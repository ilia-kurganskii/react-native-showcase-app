import { Colors } from 'react-native-nucleus-ui';

export interface LunchScreenTheme {
  lunchScreen: {
    textLogoPart1: string;
    textLoginHelper: string;
  };
}
export const LUNCH_SCREEN_THEME_LIGHT: LunchScreenTheme = {
  lunchScreen: {
    textLogoPart1: Colors.ink.dark,
    textLoginHelper: Colors.ink.dark,
  },
};

export const LUNCH_SCREEN_THEME_DARK: LunchScreenTheme = {
  lunchScreen: {
    textLogoPart1: Colors.sky.white,
    textLoginHelper: Colors.sky.white,
  },
};
