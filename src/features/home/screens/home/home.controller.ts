import { useAuthStore } from '../../../auth/stores/auth/use-auth-store';
import { useCallback } from 'react';

export function useHomeController() {
  const authStore = useAuthStore();

  const logout = useCallback(async () => {
    await authStore.logout();
  }, [authStore]);

  return {
    logout,
  };
}
