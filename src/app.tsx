import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { ThemeProvider } from 'react-native-nucleus-ui';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { FLOWS, Splash } from '~features/common';
import { DialogsScreen } from '~features/dialogs';
import { HomeTabNavigation } from '~features/home';
import { NewsNavigator } from '~features/home/navigation/news.navigator';
import { LoginNavigation } from '~features/login';

import { useAppController } from './app.controller';

const Stack = createNativeStackNavigator();

const AppComponent = () => {
  const {
    isLoading,
    isSplashScreenVisible,
    isSplashScreenEnabled,
    onSplashScreenAnimationFinished,
    isSignedIn,
    theme,
    navigationTheme,
  } = useAppController();

  return (
    <SafeAreaProvider>
      <ThemeProvider value={theme}>
        <NavigationContainer theme={navigationTheme}>
          {!isLoading ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              {isSignedIn ? (
                <>
                  <Stack.Screen
                    component={HomeTabNavigation}
                    name={FLOWS.TABS}
                  />
                  <Stack.Screen
                    component={NewsNavigator}
                    name={FLOWS.NEWS_DETAILS}
                  />
                </>
              ) : (
                <Stack.Screen component={LoginNavigation} name={FLOWS.LOGIN} />
              )}
            </Stack.Navigator>
          ) : null}
          <DialogsScreen />
          <Splash
            isEnabled={isSplashScreenEnabled}
            isVisible={isSplashScreenVisible}
            onAnimationFinish={onSplashScreenAnimationFinished}
          />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export const App = observer(AppComponent);
