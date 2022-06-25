import { dialogStoreSingleton } from './dialogs.private';

export function useDialogStore() {
  return dialogStoreSingleton;
}
