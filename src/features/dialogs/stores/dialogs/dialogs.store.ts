import { action, makeObservable, observable } from 'mobx';

import {
  DialogActions,
  DialogButtonParams,
  DialogButtonState,
  DialogParams,
  DialogState,
} from './dialogs.type';

export class DialogsStore {
  private static dialogIdCounter = 0;

  @observable
  readonly dialogs: DialogState[] = [];

  constructor() {
    makeObservable(this);
  }

  @action
  showDialog = (dialog: DialogParams): number => {
    const dialogState = this.creteDialogState(dialog);
    this.dialogs.push(dialogState);
    return dialogState.id;
  };

  @action
  closeDialog = (id: number): void => {
    const dialogArrayIndex = this.dialogs.findIndex(
      (dialog) => dialog.id === id
    );
    if (dialogArrayIndex !== -1) {
      const dialog = this.dialogs[dialogArrayIndex];
      dialog.onClose && dialog.onClose();
      dialog.isClosing = true;
    }
  };

  @action
  removeDialog = (id: number): void => {
    const dialogArrayIndex = this.dialogs.findIndex(
      (dialog) => dialog.id === id
    );
    if (dialogArrayIndex !== -1) {
      this.dialogs.splice(dialogArrayIndex, 1);
    }
  };

  @action
  closeAllDialogs = () => {
    this.dialogs.splice(0, this.dialogs.length);
  };

  getDialogActions = (id: number): DialogActions => {
    return {
      close: () => {
        this.closeDialog(id);
      },
    };
  };

  private creteDialogState = (params: DialogParams): DialogState => {
    const dialogId = DialogsStore.dialogIdCounter++;
    return {
      id: dialogId,
      isClosing: false,
      position: params.position ?? 'center',
      title: params.title,
      message: params.message,
      closable: params.closable ?? true,
      onClose: params.onClose,
      actionButton: params.actionButton
        ? this.createDialogButtonState(params.actionButton, dialogId)
        : undefined,
      secondButton: params.secondButton
        ? this.createDialogButtonState(params.secondButton, dialogId)
        : undefined,

      // internal methods
      closeDialog: () => this.closeDialog(dialogId),
      onCloseAnimationFinish: () => this.removeDialog(dialogId),
    };
  };

  private createDialogButtonState = (
    buttonParams: DialogButtonParams,
    dialogId: number
  ): DialogButtonState => {
    const dialogActions = this.getDialogActions(dialogId);
    return {
      title: buttonParams.title,
      onPress: () => buttonParams.action(dialogActions),
    };
  };
}
