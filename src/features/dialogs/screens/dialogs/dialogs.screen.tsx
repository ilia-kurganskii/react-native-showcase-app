import { observer } from 'mobx-react-lite';
import React from 'react';
import { Popover } from 'react-native-nucleus-ui';

import { BottomSheet, CenterSheet } from '~features/dialogs/components';

import { useDialogsController } from './dialogs.controller';

function DialogsScreensComponent() {
  const { dialogs, closeDialog, onFinishAnimation, getButtonProps } =
    useDialogsController();
  return dialogs.map((dialog) => {
    switch (dialog.position) {
      case 'bottom':
        return (
          <BottomSheet
            key={dialog.id}
            closable={dialog.closable}
            isClosing={dialog.isClosing}
            onClose={() => closeDialog(dialog.id)}
            onCloseAnimationFinish={() => onFinishAnimation(dialog.id)}
          >
            <Popover
              actionButton={getButtonProps(dialog.id, dialog.actionButton)}
              cancelButton={getButtonProps(dialog.id, dialog.secondButton)}
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
            onClose={() => closeDialog(dialog.id)}
            onCloseAnimationFinish={() => onFinishAnimation(dialog.id)}
          >
            <Popover
              actionButton={getButtonProps(dialog.id, dialog.actionButton)}
              cancelButton={getButtonProps(dialog.id, dialog.secondButton)}
              message={dialog.message}
              title={dialog.title}
            />
          </CenterSheet>
        );
    }
  });
}

// @ts-ignore ignore typing issue with array
export const DialogsScreen = observer(DialogsScreensComponent);
