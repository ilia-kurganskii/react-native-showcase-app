import { Colors, extendTheme, Theme } from 'react-native-nucleus-ui';

export interface BottomSheetTheme {
  bottomSheet: {
    overlay: string;
    sheet: string;
    knob: string;
  };
}
export const BOTTOM_SHEET_THEME_LIGHT: BottomSheetTheme = {
  bottomSheet: {
    knob: Colors.sky.base,
    overlay: '#00000050',
    sheet: Colors.sky.white,
  },
};

export const BOTTOM_SHEET_THEME_DARK: BottomSheetTheme = {
  bottomSheet: {
    knob: Colors.ink.light,
    overlay: '#00000050',
    sheet: Colors.ink.darker,
  },
};

export function extendThemeWithBottomSheet(theme: Theme) {
  return extendTheme<BottomSheetTheme>(theme, {
    light: BOTTOM_SHEET_THEME_LIGHT,
    dark: BOTTOM_SHEET_THEME_DARK,
  });
}
