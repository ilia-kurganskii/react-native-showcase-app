import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  Colors,
  Icon,
  TypographyPresets,
  ValueOf,
} from 'react-native-nucleus-ui';

import { SCREENS, TestIds } from '~features/common';

import { HomeScreen, ProfileScreen } from '../screens';

const Tabs = createBottomTabNavigator();

const getTabBarIcon =
  (name: ValueOf<typeof Icon.names>) =>
  (props: { focused: boolean; color: string; size: number }) =>
    <Icon name={name} style={{ color: props.color, fontSize: props.size }} />;

export function HomeTabNavigation() {
  return (
    <Tabs.Navigator
      initialRouteName={SCREENS.TABS_HOME}
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
        name={SCREENS.TABS_HOME}
        options={{
          headerShown: false,
          tabBarLabel: 'Feed',
          tabBarTestID: TestIds.Tabs.HomeTab,
          tabBarIcon: getTabBarIcon('home'),
        }}
      />

      <Tabs.Screen
        component={ProfileScreen}
        name={SCREENS.TABS_PROFILE}
        options={{
          title: 'Profile',
          tabBarLabel: 'Me',
          tabBarTestID: TestIds.Tabs.ProfileTab,
          tabBarIcon: getTabBarIcon('user'),
        }}
      />
    </Tabs.Navigator>
  );
}
