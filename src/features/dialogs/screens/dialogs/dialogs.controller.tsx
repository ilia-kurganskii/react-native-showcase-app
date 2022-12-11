import { useDispatch } from 'react-redux';

import { useAppSelector } from '~features/app';
import { dialogsSelectors } from '~features/dialogs/stores/dialogs/dialogs.selectors';
import { dialogActions } from '~features/dialogs/stores/dialogs/dialogs.slice';
import { DialogButtonState } from '~features/dialogs/stores/dialogs/dialogs.type';

export function useDialogsController() {
  const dialogs = useAppSelector(dialogsSelectors.selectAll);

  const dispatch = useDispatch();

  const closeDialog = (dialogId: string) =>
    dispatch(dialogActions.closeDialog({ id: dialogId }));

  const onFinishAnimation = (dialogId: string) =>
    dispatch(dialogActions.removeDialog({ id: dialogId }));

  const getButtonProps = (dialogId: string, button?: DialogButtonState) => {
    if (!button) {
      return undefined;
    }
    return {
      ...button,
      onPress: () =>
        dispatch(
          dialogActions.pressButton({
            dialogId,
            buttonId: button.id,
          })
        ),
    };
  };
  return {
    dialogs: dialogs,
    getButtonProps,
    onFinishAnimation,
    closeDialog,
  };
}
