import {
  Colors,
  createThemedStyleSheet,
  TypographyPresets,
} from 'react-native-nucleus-ui';

export const getLunchScreenStyles = createThemedStyleSheet(() => ({
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
    color: Colors.ink.dark,
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
    color: Colors.ink.darker,
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
}));
