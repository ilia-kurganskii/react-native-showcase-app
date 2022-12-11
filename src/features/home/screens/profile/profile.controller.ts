import { useCallback } from 'react';
import { useTheme } from 'react-native-nucleus-ui';
import { useDispatch } from 'react-redux';

import { authActions } from '~features/auth/stores/auth/auth.slice';

import { getProfileScreenStyles } from './profile.style';
import { extendThemeWithProfile } from './profile.theme';

export function useProfileController() {
  const theme = useTheme();
  const styles = getProfileScreenStyles(extendThemeWithProfile(theme));
  const dispatch = useDispatch();
  const logout = useCallback(async () => {
    dispatch(authActions.logout());
  }, [dispatch]);

  return {
    userName: '2',
    email: '22',
    styles,
    logout,
  };
}
