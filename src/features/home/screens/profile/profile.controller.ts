import { useCallback } from 'react';
import { useTheme } from 'react-native-nucleus-ui';

import { useAppService } from '~features/app';
import { AuthStore } from '~features/auth';
import { TestIds } from '~features/common';
import { useDialogStore } from '~features/dialogs';

import { getProfileScreenStyles } from './profile.style';
import { extendThemeWithProfile } from './profile.theme';

export function useProfileController() {
  const theme = useTheme();
  const dialogsStore = useDialogStore();
  const styles = getProfileScreenStyles(extendThemeWithProfile(theme));
  const authStore = useAppService(AuthStore);

  const logout = useCallback(async () => {
    dialogsStore.showDialog({
      position: 'bottom',
      title: 'Do you want to logout?',
      message: 'We will miss you',
      actionButton: {
        testID: TestIds.Profile.LogoutDialog.LogoutButton,
        title: 'Logout',
        action: async ({ close }) => {
          await authStore.logout();
          close();
        },
      },
      secondButton: {
        title: 'Cancel',
        action: ({ close }) => close(),
      },
    });
  }, [dialogsStore, authStore]);

  return {
    userName: '2',
    email: '22',
    styles,
    logout,
  };
}
