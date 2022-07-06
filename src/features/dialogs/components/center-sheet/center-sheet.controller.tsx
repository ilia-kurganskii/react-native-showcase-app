import React, { useEffect } from 'react';
import { Animated } from 'react-native';

import { CenterSheetVars } from './center-sheet.vars';

export function useCenterSheetController(params: {
  closable: boolean;
  isClosing: boolean;
  onCloseAnimationFinish: () => void;
}) {
  let { closable, isClosing, onCloseAnimationFinish } = params;

  const yOffset = React.useRef(new Animated.Value(0)).current;
  const opacityPopover = React.useRef(new Animated.Value(0)).current;
  const opacityBackground = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isClosing) {
      if (closable) {
        Animated.parallel([
          Animated.timing(opacityBackground, {
            toValue: 0,
            duration: CenterSheetVars.appearAnimationDuration,
            useNativeDriver: true,
            delay: CenterSheetVars.backgroundAnimationDelay,
          }),
          Animated.timing(yOffset, {
            toValue: CenterSheetVars.initialPopoverOffset,
            duration: CenterSheetVars.closeAnimationDuration,
            useNativeDriver: true,
          }),
          Animated.timing(opacityPopover, {
            toValue: CenterSheetVars.initialPopoverOpacity,
            duration: CenterSheetVars.closeAnimationDuration,
            useNativeDriver: true,
          }),
        ]).start(onCloseAnimationFinish);
      }
    }
  }, [
    opacityBackground,
    opacityPopover,
    yOffset,
    closable,
    isClosing,
    onCloseAnimationFinish,
  ]);

  useEffect(() => {
    yOffset.setValue(CenterSheetVars.initialPopoverOffset);
    opacityPopover.setValue(CenterSheetVars.initialPopoverOpacity);
    opacityBackground.setValue(CenterSheetVars.initialBackgroundOpacity);

    Animated.parallel([
      Animated.timing(opacityBackground, {
        toValue: 1,
        duration: CenterSheetVars.appearAnimationDuration,
        useNativeDriver: true,
      }),
      Animated.timing(yOffset, {
        toValue: 0,
        duration: CenterSheetVars.appearAnimationDuration,
        useNativeDriver: true,
        delay: CenterSheetVars.backgroundAnimationDelay,
      }),
      Animated.timing(opacityPopover, {
        toValue: 1,
        duration: CenterSheetVars.appearAnimationDuration,
        useNativeDriver: true,
        delay: CenterSheetVars.backgroundAnimationDelay,
      }),
    ]).start();
  }, [opacityBackground, opacityPopover, yOffset]);

  const animatedStylePopover = {
    opacity: opacityPopover,
    transform: [
      {
        translateY: yOffset,
      },
    ],
  };

  const animatedStyleBackground = {
    opacity: opacityBackground,
  };

  return {
    animatedStylePopover,
    animatedStyleBackground,
  };
}
