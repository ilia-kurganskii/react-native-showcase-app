import React, { useCallback, useEffect, useState } from 'react';
import {
  Animated,
  LayoutChangeEvent,
  PanResponder,
  PanResponderGestureState,
} from 'react-native';
import { useTheme } from 'react-native-nucleus-ui';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BottomSheetVars } from '~features/dialogs/components/bottom-sheet/bottom-sheet.vars';

import { getBottomSheetStyles } from './bottom-sheet.style';
import { extendThemeWithBottomSheet } from './bottom-sheet.theme';

export function useBottomSheetController(params: {
  onClose: () => void;
  closable: boolean;
  isClosing: boolean;
  onCloseAnimationFinish: () => void;
}) {
  let { closable, onClose, isClosing, onCloseAnimationFinish } = params;
  const theme = useTheme();
  const bottomSheetStyles = getBottomSheetStyles(
    extendThemeWithBottomSheet(theme)
  );
  const [height, setHeight] = useState(0);
  const [lastHeightUpdate, setLastHeightUpdate] = useState(0);

  const { bottom } = useSafeAreaInsets();
  const yOffset = React.useRef(new Animated.Value(0)).current;
  const opacityBackground = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isClosing) {
      Animated.parallel([
        Animated.timing(yOffset, {
          toValue: height,
          duration: BottomSheetVars.closeAnimationDuration,
          useNativeDriver: true,
        }),
        Animated.timing(opacityBackground, {
          toValue: 0,
          duration: BottomSheetVars.closeAnimationDuration,
          useNativeDriver: true,
        }),
      ]).start(() => onCloseAnimationFinish());
    }
  }, [opacityBackground, yOffset, height, isClosing, onCloseAnimationFinish]);

  const setInitialLayout = useCallback(
    (event: LayoutChangeEvent) => {
      const newHeight =
        event.nativeEvent.layout.height - BottomSheetVars.extraBottomSpace;

      if (height !== newHeight) {
        setHeight(newHeight);
        const now = Date.now();
        if (
          lastHeightUpdate === 0 ||
          now - lastHeightUpdate < BottomSheetVars.appearAnimationDelay
        ) {
          setLastHeightUpdate(Date.now());
          yOffset.setValue(newHeight + BottomSheetVars.extraBottomSpace);

          Animated.parallel([
            Animated.timing(opacityBackground, {
              useNativeDriver: true,
              toValue: 1,
              delay: BottomSheetVars.appearAnimationDelay,
            }),
            Animated.spring(yOffset, {
              useNativeDriver: true,
              toValue: 0,
              delay: BottomSheetVars.appearAnimationDelay,
            }),
          ]).start();
        }
      }
    },
    [opacityBackground, yOffset, height, lastHeightUpdate]
  );

  const panResponder = React.useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onShouldBlockNativeResponder: () => true,
        onPanResponderRelease: (
          event,
          gestureState: PanResponderGestureState
        ) => {
          if (
            closable &&
            onClose &&
            gestureState.dy >
              Math.min(BottomSheetVars.maximumClosingThreshold, height / 2)
          ) {
            Animated.timing(yOffset, {
              toValue: height + BottomSheetVars.extraBottomSpace,
              duration: BottomSheetVars.closeAnimationDuration,
              useNativeDriver: true,
            }).start(() => onClose!());
          } else {
            Animated.spring(yOffset, {
              useNativeDriver: true,
              toValue: 0,
            }).start();
          }
        },
        onPanResponderMove: Animated.event([null, { dy: yOffset }], {
          useNativeDriver: false,
        }),
      }),
    [onClose, closable, height, yOffset]
  );

  const animatedStylePopover = {
    paddingBottom: bottom + BottomSheetVars.extraBottomSpace,
    opacity: height > 0 ? 1 : 0,
    transform: [
      {
        translateY: yOffset.interpolate({
          inputRange: [-BottomSheetVars.extraBottomSpace, height],
          outputRange: [0, height + BottomSheetVars.extraBottomSpace],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const animatedStyleBackground = {
    opacity: opacityBackground,
  };

  return {
    setInitialLayout,
    panResponder,
    animatedStylePopover,
    animatedStyleBackground,
    bottomSheetStyles,
  };
}
