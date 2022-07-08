import {
  Colors,
  ExtendedTheme,
  TypographyPresets,
  createThemedStyleSheet,
} from 'react-native-nucleus-ui';

import { LunchScreenTheme } from './lunch.theme';

export const getLunchScreenStyles = createThemedStyleSheet(
  (theme: ExtendedTheme<LunchScreenTheme>) => ({
    scrollContainer: {
      width: '100%',
      flex: 1,
      flexDirection: 'column',
      paddingTop: 32,
    },
    safeContainer: {
      flex: 1,
    },
    logo: {
      alignSelf: 'center',
      ...TypographyPresets.Title3,
    },
    logo__start: {
      color: theme.lunchScreen.textLogoPart1,
    },
    logo__end: {
      color: Colors.primary.base,
    },
    carousel: {
      marginBottom: 32,
    },
    loginHelper: {
      flexDirection: 'row',
      alignItems: 'baseline',
      alignSelf: 'center',
      marginBottom: 32,
    },
    loginHelper__text: {
      ...TypographyPresets.Regular.Normal.Regular,
      color: theme.lunchScreen.textLoginHelper,
    },
    loginHelper__link: {
      ...TypographyPresets.Regular.Normal.Regular,
      color: Colors.primary.base,
    },
    button: {
      marginTop: 'auto',
      alignSelf: 'center',
      marginBottom: 24,
    },
  })
);
