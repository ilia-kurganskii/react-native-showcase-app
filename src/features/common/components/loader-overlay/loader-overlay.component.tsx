import Lottie from 'lottie-react-native';
import React from 'react';
import { View } from 'react-native';

import { loaderOverlayStyle } from './loader-overlay.style';

export interface LoaderOverlayProps {
  isVisible?: boolean;
}

function LoaderOverlayComponent(props: LoaderOverlayProps) {
  const { isVisible = false } = props;
  if (!isVisible) {
    return null;
  }
  return (
    <View style={loaderOverlayStyle.wrapper}>
      <Lottie
        autoPlay={true}
        loop={true}
        source={require('./assets/loader.json')}
        style={loaderOverlayStyle.animation}
      />
    </View>
  );
}

export const LoaderOverlay = React.memo(LoaderOverlayComponent);
