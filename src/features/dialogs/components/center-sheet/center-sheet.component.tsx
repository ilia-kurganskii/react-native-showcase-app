import React from 'react';
import {
  Animated,
  SafeAreaView,
  TouchableOpacity,
  ViewProps,
} from 'react-native';

import { useCenterSheetController } from '~features/dialogs/components/center-sheet/center-sheet.controller';

import { centerSheetStyle } from './center-sheet.style';

export interface CenterSheetProps extends ViewProps {
  onClose: () => void;
  closable: boolean;
  isClosing: boolean;
  onCloseAnimationFinish: () => void;
}
function CenterSheetComponent(props: CenterSheetProps) {
  const { closable, onClose, isClosing, onCloseAnimationFinish, children } =
    props;
  const { animatedStylePopover, animatedStyleBackground } =
    useCenterSheetController({
      closable,
      isClosing,
      onCloseAnimationFinish,
    });
  return (
    <Animated.View
      style={[centerSheetStyle.container, animatedStyleBackground]}
    >
      <TouchableOpacity onPress={onClose} style={centerSheetStyle.background} />
      <SafeAreaView>
        <Animated.View style={[centerSheetStyle.popover, animatedStylePopover]}>
          {children}
        </Animated.View>
      </SafeAreaView>
    </Animated.View>
  );
}

export const CenterSheet = React.memo(CenterSheetComponent);
