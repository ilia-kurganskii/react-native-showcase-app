import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import React from 'react';
import { TypographyPresets } from 'react-native-nucleus-ui';

import { HeaderBackButton } from '~features/common';

export const StackNavigatorHeaderPreset: NativeStackNavigationOptions = {
  headerBackTitleVisible: false,
  headerShadowVisible: false,
  headerLeft: (props) => <HeaderBackButton {...props} />,
  // @ts-ignore override only font
  headerTitleStyle: {
    ...TypographyPresets.Large.None.Regular,
  },
};
