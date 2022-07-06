import React from 'react';
import { Animated, TouchableOpacity, View, ViewProps } from 'react-native';

import { useBottomSheetController } from './bottom-sheet.controller';
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
    bottomSheetStyles,
  } = useBottomSheetController({
    closable,
    onClose,
    isClosing,
    onCloseAnimationFinish,
  });

  return (
    <View {...viewProps} style={[bottomSheetStyles.container]}>
      <Animated.View
        style={[bottomSheetStyles.overlay, animatedStyleBackground]}
      />
      <TouchableOpacity
        disabled={!closable}
        onPress={onClose}
        style={bottomSheetStyles.background}
      />
      <Animated.View
        onLayout={setInitialLayout}
        style={[bottomSheetStyles.sheet, animatedStylePopover]}
      >
        <View
          hitSlop={BottomSheetVars.knobHitSlop}
          {...panResponder.panHandlers}
          style={bottomSheetStyles.line}
        >
          <View style={bottomSheetStyles.line__knob} />
        </View>
        {children}
      </Animated.View>
    </View>
  );
}

export const BottomSheet = React.memo(BottomSheetComponent);
