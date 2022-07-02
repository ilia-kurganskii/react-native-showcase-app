import { useCallback } from 'react';

import { useDialogStore } from '~features/dialogs';

export function useErrorHandler() {
  const dialogsStore = useDialogStore();
  return useCallback(
    (error: any) => {
      if (error instanceof Error) {
        dialogsStore.showDialog({
          title: 'Something went wrong',
          message: error.message,
          actionButton: {
            title: 'Close',
            action: (actions) => actions.close(),
          },
        });
      }
    },
    [dialogsStore]
  );
}
