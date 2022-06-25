import {
  createThemedStyleSheet,
  ExtendedTheme,
  TypographyPresets,
} from 'react-native-nucleus-ui';
import { LoginScreenTheme } from './login.theme';

export const getLoginScreenStyles = createThemedStyleSheet(
  (theme: ExtendedTheme<LoginScreenTheme>) => ({
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
      color: theme.loginScreen.textLabel,
    },
    input: {
      marginBottom: 4,
    },
    error: {
      ...TypographyPresets.Small.Normal.Regular,
      marginBottom: 24,
      color: theme.loginScreen.textError,
    },
    button: {
      marginTop: 'auto',
      alignSelf: 'center',
      marginBottom: 24,
    },
  })
);
