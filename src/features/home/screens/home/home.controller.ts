import { useCallback } from 'react';

import { useAuthStore } from '~features/auth';

export function useHomeController() {
  const authStore = useAuthStore();

  const logout = useCallback(async () => {
    await authStore.logout();
  }, [authStore]);

  return {
    logout,
  };
}
