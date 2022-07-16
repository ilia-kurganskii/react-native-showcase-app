import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import React from 'react';
import { TypographyPresets } from 'react-native-nucleus-ui';

import { HeaderBackButton, TestIds } from '~features/common';

export const StackNavigatorHeaderPreset: NativeStackNavigationOptions = {
  headerBackTitleVisible: false,
  headerShadowVisible: false,
  headerTitleAlign: 'center',
  headerLeft: (props) => (
    <HeaderBackButton testID={TestIds.Navigation.BackButton} {...props} />
  ),
  // @ts-ignore override only font
  headerTitleStyle: {
    ...TypographyPresets.Large.None.Regular,
  },
};
