import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';
import { Colors } from 'react-native-nucleus-ui';

export const NavigationThemeDark: Theme = {
  ...DarkTheme,
  colors: {
    primary: Colors.sky.white,
    background: Colors.ink.darkest,
    card: Colors.ink.darkest,
    text: Colors.sky.white,
    border: Colors.sky.white,
    notification: Colors.red.base,
  },
};

export const NavigationThemeLight: Theme = {
  ...DefaultTheme,
  colors: {
    primary: Colors.ink.darkest,
    background: Colors.sky.white,
    card: Colors.sky.white,
    text: Colors.ink.darkest,
    border: Colors.ink.darkest,
    notification: Colors.red.base,
  },
};
