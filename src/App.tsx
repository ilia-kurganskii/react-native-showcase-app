import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuthStore } from './features/auth/stores/auth/use-auth-store';
import { HomeScreen } from './features/home/screens/home.screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './features/login/screens/login.screen';
import { observer } from 'mobx-react-lite';

const Stack = createNativeStackNavigator();

const AppComponent = () => {
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

export const App = observer(AppComponent);
