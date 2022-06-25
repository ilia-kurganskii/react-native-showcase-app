import React from 'react';
import { Popover } from 'react-native-nucleus-ui';
import { dialogsStyles } from './dialogs.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { observer } from 'mobx-react-lite';
import { useDialogsController } from './dialogs.controller';

function DialogsScreensComponent() {
  const { dialogs } = useDialogsController();
  return dialogs.map((dialog) => (
    <SafeAreaView key={dialog.id} style={dialogsStyles.container}>
      <Popover
        actionButton={dialog.actionButton}
        cancelButton={dialog.closeButton}
        message={dialog.message}
        title={dialog.title}
      />
    </SafeAreaView>
  ));
}

// @ts-ignore ignore typing issue with array
export const DialogsScreen = observer(DialogsScreensComponent);
