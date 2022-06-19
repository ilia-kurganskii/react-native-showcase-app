import {
  Colors,
  createThemedStyleSheet,
  ExtendedTheme,
  TypographyPresets,
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
      ...TypographyPresets.Regular.Normal.Regular,
      alignItems: 'baseline',
      alignSelf: 'center',
      marginBottom: 32,
    },
    loginHelper__text: {
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
