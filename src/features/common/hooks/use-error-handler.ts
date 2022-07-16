import { useCallback } from 'react';

import { useLoggerService } from '~features/common';
import { useDialogStore } from '~features/dialogs';

export function useErrorHandler() {
  const dialogsStore = useDialogStore();
  const loggerService = useLoggerService();
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
      loggerService.warn('Something went wrong', error);
    },
    [loggerService, dialogsStore]
  );
}
