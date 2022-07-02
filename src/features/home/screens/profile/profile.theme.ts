import { Colors, extendTheme, Theme } from 'react-native-nucleus-ui';

export interface ProfileScreenTheme {
  profileScreen: {
    label: string;
    listItem: {
      text: string;
      divider: string;
    };
  };
}
export const PROFILE_SCREEN_THEME_LIGHT: ProfileScreenTheme = {
  profileScreen: {
    label: Colors.ink.darkest,
    listItem: {
      text: Colors.ink.darkest,
      divider: Colors.sky.lighter,
    },
  },
};

export const PROFILE_SCREEN_THEME_DARK: ProfileScreenTheme = {
  profileScreen: {
    label: Colors.sky.white,
    listItem: {
      text: Colors.sky.white,
      divider: Colors.ink.light,
    },
  },
};

export function extendThemeWithProfile(theme: Theme) {
  return extendTheme<ProfileScreenTheme>(theme, {
    light: PROFILE_SCREEN_THEME_LIGHT,
    dark: PROFILE_SCREEN_THEME_DARK,
  });
}
