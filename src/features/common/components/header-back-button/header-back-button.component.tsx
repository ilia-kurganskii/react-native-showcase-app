import {
  HeaderBackButton as HeaderBackButtonRN,
  HeaderBackButtonProps,
} from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { headerBackButtonStyle } from '~features/common/components/header-back-button/header-back-button.style';

function BackImage(props: { tintColor: string }) {
  return (
    <Image
      source={require('../../assets/icons/back/back.png')}
      style={{ tintColor: props.tintColor }}
    />
  );
}

function HeaderHeaderBackButtonComponent(props: HeaderBackButtonProps) {
  const { style, ...buttonProps } = props;
  const navigation = useNavigation();
  return (
    <HeaderBackButtonRN
      backImage={BackImage}
      onPress={navigation.goBack}
      style={StyleSheet.compose(style, headerBackButtonStyle.container)}
      {...buttonProps}
    />
  );
}

export const HeaderBackButton = HeaderHeaderBackButtonComponent;
