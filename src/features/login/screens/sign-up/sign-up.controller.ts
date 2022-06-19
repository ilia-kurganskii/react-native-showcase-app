import { useAuthStore } from '../../../auth/stores/auth/use-auth-store';
import { useCallback } from 'react';
import { useTheme } from 'react-native-nucleus-ui';
import { getSignUpScreenStyles } from './sign-up.style';
import { extendThemeWithSignUp } from './sign-up.theme';

export function useSignUpController() {
  const authStore = useAuthStore();
  const theme = useTheme();
  const styles = getSignUpScreenStyles(extendThemeWithSignUp(theme));
  const signUp = useCallback(async () => {
    await authStore.signUpEmailAndPassword({
      login: 'ilya.kurganskii@gmail.com',
      password: 'password',
    });
  }, [authStore]);

  return {
    signUp,
    styles,
  };
}
