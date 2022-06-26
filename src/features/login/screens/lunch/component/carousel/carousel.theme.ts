import { Colors, Theme, extendTheme } from 'react-native-nucleus-ui';

export interface CarouselComponentTheme {
  carousel: {
    text: string;
  };
}
export const CAROUSEL_COMPONENT_THEME_LIGHT: CarouselComponentTheme = {
  carousel: {
    text: Colors.ink.darker,
  },
};

export const CAROUSEL_COMPONENT_THEME_DARK: CarouselComponentTheme = {
  carousel: {
    text: Colors.sky.white,
  },
};

export function extendThemeWithCarousel(theme: Theme) {
  return extendTheme<CarouselComponentTheme>(theme, {
    light: CAROUSEL_COMPONENT_THEME_LIGHT,
    dark: CAROUSEL_COMPONENT_THEME_DARK,
  });
}
