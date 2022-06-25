import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuthStore } from './features/auth/stores/auth/use-auth-store';
import { HomeScreen } from './features/home/screens/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { observer } from 'mobx-react-lite';
import { LoginNavigation } from './features/login/navigation/login.navigation';
import { FLOWS } from './features/common/navigation/screen.const';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useColorScheme } from 'react-native';
import {
  DARK_THEME,
  LIGHT_THEME,
  ThemeProvider,
} from 'react-native-nucleus-ui';
import {
  NavigationThemeDark,
  NavigationThemeLight,
} from './features/common/theme/navigation.theme';
import { DialogsScreen } from './features/dialogs/screens/dialogs/dialogs.screen';

const Stack = createNativeStackNavigator();

const AppComponent = () => {
  const authStore = useAuthStore();

  useEffect(() => {
    authStore.onCreate();
    return () => authStore.onDestroy();
  });

  const deviceTheme = useColorScheme();

  const [theme, navigationTheme] =
    deviceTheme === 'dark'
      ? [DARK_THEME, NavigationThemeDark]
      : [LIGHT_THEME, NavigationThemeLight];

  return (
    <SafeAreaProvider>
      <ThemeProvider value={theme}>
        <NavigationContainer theme={navigationTheme}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {authStore.state === 'signedIn' ? (
              <Stack.Screen component={HomeScreen} name={FLOWS.HOME} />
            ) : (
              <Stack.Screen component={LoginNavigation} name={FLOWS.LOGIN} />
            )}
          </Stack.Navigator>
          <DialogsScreen />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export const App = observer(AppComponent);
