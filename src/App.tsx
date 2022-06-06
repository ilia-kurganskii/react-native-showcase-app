import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuthStore } from './features/auth/stores/use-auth-store';
import { HomeScreen } from './features/home/screens/home.screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './features/login/screens/login.screen';

const Stack = createNativeStackNavigator();

export const App = () => {
  const { state } = useAuthStore();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {state === 'signedId' ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <Stack.Screen name="SignIn" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
