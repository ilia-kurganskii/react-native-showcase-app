import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  Colors,
  Icon,
  TypographyPresets,
  ValueOf,
} from 'react-native-nucleus-ui';

import { SCREENS } from '~features/common';

import { HomeScreen, ProfileScreen } from '../screens';

const Tabs = createBottomTabNavigator();

const getTabBarIcon =
  (name: ValueOf<typeof Icon.names>) =>
  (props: { focused: boolean; color: string; size: number }) =>
    <Icon name={name} style={{ color: props.color, fontSize: props.size }} />;

export function HomeTabNavigation() {
  return (
    <Tabs.Navigator
      initialRouteName={SCREENS.LOGIN_LUNCH}
      screenOptions={{
        tabBarLabelStyle: TypographyPresets.Tiny.None.Regular,
        tabBarActiveTintColor: Colors.primary.base,
        tabBarInactiveTintColor: Colors.ink.light,
        headerTitleStyle: TypographyPresets.Large.None.Regular,
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
        component={HomeScreen}
        name={SCREENS.HOME_HOME}
        options={{
          title: 'Feed',
          tabBarIcon: getTabBarIcon('home'),
        }}
      />

      <Tabs.Screen
        component={ProfileScreen}
        name={SCREENS.HOME_PROFILE}
        options={{
          title: 'Profile',
          tabBarLabel: 'Me',
          tabBarIcon: getTabBarIcon('user'),
        }}
      />
    </Tabs.Navigator>
  );
}
