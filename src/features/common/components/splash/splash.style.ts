import { StyleSheet } from 'react-native';
import { createThemedStyleSheet, ExtendedTheme } from 'react-native-nucleus-ui';

import { SplashTheme } from '~features/common/components/splash/splash.theme';

export const getSplashStyles = createThemedStyleSheet(
  (theme: ExtendedTheme<SplashTheme>) => ({
    container: {
      ...StyleSheet.absoluteFillObject,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.splashComponent.background,
    },
    animation: {
      width: 220,
      height: 220,
    },
  })
);
