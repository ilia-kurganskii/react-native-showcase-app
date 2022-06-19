import {
  createThemedStyleSheet,
  ExtendedTheme,
  TypographyPresets,
} from 'react-native-nucleus-ui';
import { CarouselComponentTheme } from './carousel.theme';

export const getCarouselStyle = createThemedStyleSheet(
  (theme: ExtendedTheme<CarouselComponentTheme>) => ({
    scrollContainer: {},
    itemContainer: {
      padding: 16,
      flexDirection: 'column',
    },
    pageControls: {
      marginTop: 47,
      alignSelf: 'center',
    },
    image: {
      width: '100%',
    },
    text: {
      ...TypographyPresets.Title3,
      textAlign: 'center',
      color: theme.carousel.text,
    },
  })
);
