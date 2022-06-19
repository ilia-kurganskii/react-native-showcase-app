import {
  Colors,
  createThemedStyleSheet,
  TypographyPresets,
} from 'react-native-nucleus-ui';

export const getSignUpScreenStyles = createThemedStyleSheet(() => ({
  keyboardView: {
    flex: 1,
  },
  scrollContainer: {
    flexDirection: 'column',
    paddingHorizontal: 24,
    paddingTop: 32,
    backgroundColor: Colors.sky.white,
    flex: 1,
  },
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.sky.white,
  },
  label: {
    ...TypographyPresets.Regular.None.Medium,
    marginBottom: 12,
  },
  input: {
    marginBottom: 14,
  },
  button: {
    marginTop: 'auto',
    alignSelf: 'center',
    marginBottom: 24,
  },
}));
