import { useDialogStore } from '../../stores/dialogs';

export function useDialogsController() {
  const dialogsStore = useDialogStore();

  return {
    dialogs: dialogsStore.dialogs,
  };
}
