import {
  createThemedStyleSheet,
  ExtendedTheme,
  TypographyPresets,
} from 'react-native-nucleus-ui';

import { ProfileScreenTheme } from '~features/home/screens/profile/profile.theme';

export const getProfileScreenStyles = createThemedStyleSheet(
  (theme: ExtendedTheme<ProfileScreenTheme>) => ({
    scrollContainer: {
      flexDirection: 'column',
      paddingTop: 32,
      flex: 1,
    },
    safeContainer: {
      flex: 1,
    },
    label: {
      ...TypographyPresets.Tiny.None.Regular,
      color: theme.profileScreen.label,
      marginLeft: 24,
      marginBottom: 12,
    },
    logoutButton: {
      marginTop: 'auto',
      alignSelf: 'center',
      marginBottom: 12,
      marginHorizontal: 24,
    },
  })
);
