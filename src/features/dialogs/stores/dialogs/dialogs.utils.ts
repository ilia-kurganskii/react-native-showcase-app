import { Action } from '@reduxjs/toolkit';
import { take } from 'redux-saga/effects';

import {
  DialogParams,
  DialogStateItem,
} from '~features/dialogs/stores/dialogs/dialogs.type';

export function creteDialogState(params: DialogParams): DialogStateItem {
  return {
    id: params.id,
    isClosing: false,
    position: params.position ?? 'center',
    title: params.title,
    message: params.message,
    closable: params.closable ?? true,
    actionButton: params.actionButton,
    secondButton: params.secondButton,
  };
}

export function takeDialogAction(dialogId: string, action: Action<string>) {
  return take((filterAction: Action<string>) => {
    return (
      filterAction.type === action.type &&
      // @ts-ignore
      filterAction.payload?.dialogId === dialogId
    );
  });
}
