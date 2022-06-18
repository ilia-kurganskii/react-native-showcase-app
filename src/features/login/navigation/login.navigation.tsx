import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '../../common/navigation/screen.const';
import React from 'react';
import { LunchScreen } from '../screens/lunch';
import { LoginScreen } from '../screens/login';
import { SignUpScreen } from '../screens/sign-up';

const LoginStack = createNativeStackNavigator();

export function LoginNavigation() {
  return (
    <LoginStack.Navigator
      initialRouteName={SCREENS.LOGIN_LUNCH}
      screenOptions={{ headerShown: false }}
    >
      <LoginStack.Screen name={SCREENS.LOGIN_LUNCH} component={LunchScreen} />
      <LoginStack.Screen name={SCREENS.LOGIN_LOGIN} component={LoginScreen} />
      <LoginStack.Screen
        name={SCREENS.LOGIN_SIGN_UP}
        component={SignUpScreen}
      />
    </LoginStack.Navigator>
  );
}
