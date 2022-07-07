import { observer } from 'mobx-react-lite';
import React from 'react';
import { Popover } from 'react-native-nucleus-ui';

import { BottomSheet, CenterSheet } from '~features/dialogs/components';
import { DialogState } from '~features/dialogs/stores/dialogs/dialogs.type';

import { useDialogsController } from './dialogs.controller';

function renderDialog(dialog: DialogState) {
  switch (dialog.position) {
    case 'bottom':
      return (
        <BottomSheet
          key={dialog.id}
          closable={dialog.closable}
          isClosing={dialog.isClosing}
          onClose={dialog.closeDialog}
          onCloseAnimationFinish={dialog.onCloseAnimationFinish}
        >
          <Popover
            actionButton={dialog.actionButton}
            cancelButton={dialog.secondButton}
            message={dialog.message}
            title={dialog.title}
          />
        </BottomSheet>
      );

    case 'center':
      return (
        <CenterSheet
          key={dialog.id}
          closable={dialog.closable}
          isClosing={dialog.isClosing}
          onClose={dialog.closeDialog}
          onCloseAnimationFinish={dialog.onCloseAnimationFinish}
        >
          <Popover
            actionButton={dialog.actionButton}
            cancelButton={dialog.secondButton}
            message={dialog.message}
            title={dialog.title}
          />
        </CenterSheet>
      );
  }
}

function DialogsScreensComponent() {
  const { dialogs } = useDialogsController();
  return dialogs.map(renderDialog);
}

// @ts-ignore ignore typing issue with array
export const DialogsScreen = observer(DialogsScreensComponent);
