import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { SCREENS, StackNavigatorHeaderPreset } from '~features/common';
import { NewsDetailsScreen } from '~features/home';

const NewsStack = createNativeStackNavigator();

export function NewsNavigator() {
  return (
    <NewsStack.Navigator
      initialRouteName={SCREENS.NEWS_DETAILS}
      screenOptions={{
        ...StackNavigatorHeaderPreset,
      }}
    >
      <NewsStack.Screen
        component={NewsDetailsScreen}
        name={SCREENS.NEWS_DETAILS}
        options={{
          title: '',
        }}
      />
    </NewsStack.Navigator>
  );
}
