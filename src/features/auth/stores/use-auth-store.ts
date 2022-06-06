import { authStoreSingleton } from './auth.store';

export function useAuthStore() {
  return authStoreSingleton;
}
