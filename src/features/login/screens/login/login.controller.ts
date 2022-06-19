import { useAuthStore } from '../../../auth/stores/auth/use-auth-store';
import { useCallback } from 'react';
import { useTheme } from 'react-native-nucleus-ui';
import { getLoginScreenStyles } from './login.style';
import { extendThemeWithLogin } from './login.theme';

export function useLoginController() {
  const authStore = useAuthStore();
  const theme = useTheme();
  const styles = getLoginScreenStyles(extendThemeWithLogin(theme));
  const login = useCallback(() => authStore.loginAnonymously(), [authStore]);

  return {
    login,
    styles,
  };
}
