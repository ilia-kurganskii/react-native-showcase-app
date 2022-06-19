import {
  createThemedStyleSheet,
  ExtendedTheme,
  TypographyPresets,
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
    input: {
      marginBottom: 14,
    },
    button: {
      marginTop: 'auto',
      alignSelf: 'center',
      marginBottom: 24,
    },
  })
);
