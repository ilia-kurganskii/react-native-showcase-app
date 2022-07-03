import { useCallback } from 'react';
import { useTheme } from 'react-native-nucleus-ui';

import { useAuthStore } from '~features/auth';

import { getProfileScreenStyles } from './profile.style';
import { extendThemeWithProfile } from './profile.theme';

export function useProfileController() {
  const theme = useTheme();
  const styles = getProfileScreenStyles(extendThemeWithProfile(theme));
  const authStore = useAuthStore();
  const user = authStore.user;

  const logout = useCallback(async () => {
    await authStore.logout();
  }, [authStore]);

  return {
    userName: user?.displayName,
    email: user?.email,
    styles,
    logout,
  };
}
