export type DialogPosition = 'bottom' | 'center';

export interface DialogActions {
  close: () => void;
}

export interface DialogButtonParams {
  title: string;
  testID?: string;
  action: (actions: DialogActions) => void;
}

export interface DialogParams {
  position?: DialogPosition;
  title: string;
  message: string;
  /**
   * If true dialog will be closed by back button or tap on background
   */
  closable?: boolean;
  onClose?: () => void;
  actionButton?: DialogButtonParams;
  secondButton?: DialogButtonParams;
}

export interface DialogButtonState {
  title: string;
  testID?: string;
  onPress: () => void;
}

export interface DialogState {
  id: number;
  position: DialogPosition;
  title: string;
  message: string;
  closable: boolean;
  onClose?: () => void;
  actionButton?: DialogButtonState;
  secondButton?: DialogButtonState;

  // internal
  isClosing: boolean;
  closeDialog: () => void;
  onCloseAnimationFinish: () => void;
}
