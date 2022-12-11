export type DialogPosition = 'bottom' | 'center';

export interface DialogButtonParams<T extends string> {
  id: T;
  title: string;
  testID?: string;
}

export interface DialogParams<T extends string = string> {
  id: string;
  position?: DialogPosition;
  title: string;
  message: string;
  /**
   * If true dialog will be closed by back button or tap on background
   */
  closable?: boolean;
  actionButton?: DialogButtonParams<T>;
  secondButton?: DialogButtonParams<T>;
}

export interface DialogButtonState {
  id: string;
  title: string;
  testID?: string;
}

export interface DialogStateItem {
  id: string;
  position: DialogPosition;
  title: string;
  message: string;
  closable: boolean;
  actionButton?: DialogButtonState;
  secondButton?: DialogButtonState;

  // internal
  isClosing: boolean;
}
