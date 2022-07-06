import React from 'react';
import { Animated, TouchableOpacity, View, ViewProps } from 'react-native';

import { useBottomSheetController } from './bottom-sheet.controller';
import { bottomSheetStyle } from './bottom-sheet.style';
import { BottomSheetVars } from './bottom-sheet.vars';

interface BottomSheetProps extends ViewProps {
  onClose: () => void;
  closable: boolean;
  isClosing: boolean;
  onCloseAnimationFinish: () => void;
}

function BottomSheetComponent(props: BottomSheetProps) {
  const {
    closable,
    onClose,
    isClosing,
    onCloseAnimationFinish,
    children,
    ...viewProps
  } = props;
  const {
    setInitialLayout,
    panResponder,
    animatedStylePopover,
    animatedStyleBackground,
  } = useBottomSheetController({
    closable,
    onClose,
    isClosing,
    onCloseAnimationFinish,
  });

  return (
    <View {...viewProps} style={[bottomSheetStyle.container]}>
      <Animated.View
        style={[bottomSheetStyle.overlay, animatedStyleBackground]}
      />
      <TouchableOpacity
        disabled={!closable}
        onPress={onClose}
        style={bottomSheetStyle.background}
      />
      <Animated.View
        onLayout={setInitialLayout}
        style={[bottomSheetStyle.sheet, animatedStylePopover]}
      >
        <View
          hitSlop={BottomSheetVars.knobHitSlop}
          {...panResponder.panHandlers}
          style={bottomSheetStyle.line}
        >
          <View style={bottomSheetStyle.line__knob} />
        </View>
        {children}
      </Animated.View>
    </View>
  );
}

export const BottomSheet = React.memo(BottomSheetComponent);
