import { useAuthStore } from '../../../auth/stores/auth/use-auth-store';
import { useCallback } from 'react';

export function useSignUpController() {
  const authStore = useAuthStore();

  const signUp = useCallback(async () => {
    await authStore.signUpEmailAndPassword({
      login: 'ilya.kurganskii@gmail.com',
      password: 'password',
    });
  }, [authStore]);

  return {
    signUp,
  };
}
