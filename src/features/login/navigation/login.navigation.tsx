import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { SCREENS, StackNavigatorHeaderPreset } from '~features/common';

import { LoginScreen, LunchScreen, SignUpScreen } from '../screens';

const LoginStack = createNativeStackNavigator();

export function LoginNavigation() {
  return (
    <LoginStack.Navigator
      initialRouteName={SCREENS.LOGIN_LUNCH}
      screenOptions={{
        ...StackNavigatorHeaderPreset,
      }}
    >
      <LoginStack.Screen
        component={LunchScreen}
        name={SCREENS.LOGIN_LUNCH}
        options={{ headerShown: false }}
      />
      <LoginStack.Screen
        component={LoginScreen}
        name={SCREENS.LOGIN_LOGIN}
        options={{
          title: 'Login',
        }}
      />
      <LoginStack.Screen
        component={SignUpScreen}
        name={SCREENS.LOGIN_SIGN_UP}
        options={{
          title: 'Create account',
        }}
      />
    </LoginStack.Navigator>
  );
}
