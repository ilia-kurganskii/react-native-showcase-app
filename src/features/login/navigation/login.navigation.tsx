import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '../../common/navigation/screen.const';
import React from 'react';
import { LunchScreen } from '../screens/lunch';
import { LoginScreen } from '../screens/login';
import { SignUpScreen } from '../screens/sign-up';
import { TypographyPresets } from 'react-native-nucleus-ui';

const LoginStack = createNativeStackNavigator();

export function LoginNavigation() {
  return (
    <LoginStack.Navigator
      initialRouteName={SCREENS.LOGIN_LUNCH}
      screenOptions={{
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        // @ts-ignore override only font
        headerTitleStyle: {
          ...TypographyPresets.Large.None.Regular,
        },
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
