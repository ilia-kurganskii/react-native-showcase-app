import {
  ExtendedTheme,
  TypographyPresets,
  createThemedStyleSheet,
} from 'react-native-nucleus-ui';

import { ProfileScreenTheme } from '../../profile.theme';

export const getProfileItemStyles = createThemedStyleSheet(
  (theme: ExtendedTheme<ProfileScreenTheme>) => ({
    container: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingHorizontal: 24,
      paddingVertical: 22,
      borderTopWidth: 1,
      borderTopColor: theme.profileScreen.listItem.divider,
    },
    label: {
      ...TypographyPresets.Regular.Tight.Regular,
      color: theme.profileScreen.listItem.text,
    },
    value: {
      ...TypographyPresets.Regular.Tight.Regular,
      color: theme.profileScreen.listItem.text,
    },
  })
);
