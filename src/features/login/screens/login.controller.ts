import { useAuthStore } from '../../auth/stores/auth/use-auth-store';
import { useCallback } from 'react';

export function useLoginController() {
  const authStore = useAuthStore();

  const login = useCallback(
    () =>
      authStore.loginByPassword({
        login: 'login',
        password: 'password',
      }),
    [authStore]
  );

  return {
    login,
  };
}
