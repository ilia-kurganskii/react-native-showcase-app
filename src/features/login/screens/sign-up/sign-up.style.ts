import {
  ExtendedTheme,
  TypographyPresets,
  createThemedStyleSheet,
} from 'react-native-nucleus-ui';

import { SignUpScreenTheme } from './sign-up.theme';

export const getSignUpScreenStyles = createThemedStyleSheet(
  (theme: ExtendedTheme<SignUpScreenTheme>) => ({
    keyboardView: {
      flex: 1,
    },
    scrollContainer: {
      flexDirection: 'column',
      paddingHorizontal: 24,
      paddingTop: 32,
      flex: 1,
    },
    safeContainer: {
      flex: 1,
    },
    label: {
      ...TypographyPresets.Regular.None.Medium,
      marginBottom: 12,
      color: theme.signUpScreen.textLabel,
    },
    error: {
      ...TypographyPresets.Small.Normal.Regular,
      marginBottom: 12,
      color: theme.signUpScreen.textError,
    },
    input: {
      marginBottom: 4,
    },
    button: {
      marginTop: 'auto',
      alignSelf: 'center',
      marginBottom: 24,
    },
  })
);
