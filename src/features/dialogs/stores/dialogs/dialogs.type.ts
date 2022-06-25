export interface DialogActions {
  close: () => void;
}

export interface DialogButtonParams {
  title: string;
  action: (actions: DialogActions) => void;
}

export interface DialogParams {
  title: string;
  message: string;
  actionButton?: DialogButtonParams;
  closeButton?: DialogButtonParams;
}

export interface DialogButtonState {
  title: string;
  onPress: () => void;
}

export interface DialogState {
  id: number;
  title: string;
  message: string;
  actionButton?: DialogButtonState;
  closeButton?: DialogButtonState;
}
