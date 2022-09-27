import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { ReactNode } from 'react';
import { ThemeProvider } from 'react-native-nucleus-ui';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { container, DIProvider, RootStore } from '~features/app';
import { FLOWS, Splash } from '~features/common';
import { DialogsScreen } from '~features/dialogs';
import { HomeTabNavigation } from '~features/home';
import { NewsNavigator } from '~features/home/navigation/news.navigator';
import { LoginNavigation } from '~features/login';

import { useAppController } from './app.controller';

const Stack = createNativeStackNavigator();

function Providers(props: { children: ReactNode }) {
  return (
    <SafeAreaProvider>
      <DIProvider value={container}>
        <Provider store={container.get(RootStore).store}>
          {props.children}
        </Provider>
      </DIProvider>
    </SafeAreaProvider>
  );
}

function MainComponent() {
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
    <ThemeProvider value={theme}>
      <NavigationContainer theme={navigationTheme}>
        {!isLoading ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isSignedIn ? (
              <>
                <Stack.Screen component={HomeTabNavigation} name={FLOWS.TABS} />
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
  );
}

export function AppComponent() {
  return (
    <Providers>
      <MainComponent />
    </Providers>
  );
}

export const App = AppComponent;
