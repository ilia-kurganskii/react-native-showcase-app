import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuthStore } from './features/auth/stores/auth/use-auth-store';
import { HomeScreen } from './features/home/screens/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { observer } from 'mobx-react-lite';
import { LoginNavigation } from './features/login/navigation/login.navigation';
import { FLOWS } from './features/common/navigation/screen.const';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const AppComponent = () => {
  const authStore = useAuthStore();

  useEffect(() => {
    authStore.onCreate();
    return () => authStore.onDestroy();
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {authStore.state === 'signedIn' ? (
            <Stack.Screen name={FLOWS.HOME} component={HomeScreen} />
          ) : (
            <Stack.Screen name={FLOWS.LOGIN} component={LoginNavigation} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export const App = observer(AppComponent);
