import Lottie from 'lottie-react-native';
import React, { useCallback, useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { useTheme } from 'react-native-nucleus-ui';

import { getSplashStyles } from './splash.style';
import { extendThemeWithSplash } from './splash.theme';

export interface SplashProps {
  onAnimationFinish?: () => void;
  isVisible?: boolean;
  isEnabled?: boolean;
}

function SplashComponent(props: SplashProps) {
  let { onAnimationFinish, isEnabled, isVisible } = props;
  const theme = useTheme();
  const lottieRef = useRef<Lottie>(null);
  const opacityRef = useRef(new Animated.Value(1));
  const styles = getSplashStyles(extendThemeWithSplash(theme));

  useEffect(() => {
    if (isEnabled) {
      setTimeout(() => lottieRef.current?.play(), 100);
    }
  }, [isEnabled]);

  const onLottieAnimationFinish = useCallback(() => {
    Animated.timing(opacityRef.current, {
      toValue: 0,
      delay: 30,
      duration: 1000,
      useNativeDriver: true,
    }).start(onAnimationFinish);
  }, [onAnimationFinish]);

  if (!isVisible) {
    return null;
  }
  return (
    <Animated.View style={[styles.container, { opacity: opacityRef.current }]}>
      <Lottie
        ref={lottieRef}
        autoPlay={false}
        loop={false}
        onAnimationFinish={onLottieAnimationFinish}
        source={require('./assets/splash.json')}
        style={styles.animation}
      />
    </Animated.View>
  );
}

export const Splash = React.memo(SplashComponent);
