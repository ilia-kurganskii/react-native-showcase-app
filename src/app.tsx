import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Sentry from '@sentry/react-native';
import React, { ReactNode, useCallback } from 'react';
import { ThemeProvider } from 'react-native-nucleus-ui';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { container, DIProvider, RootStore } from '~features/app';
import { FLOWS, Splash } from '~features/common';
import { AppConfiguration } from '~features/common';
import { DialogsScreen } from '~features/dialogs';
import { HomeTabNavigation } from '~features/home';
import { NewsNavigator } from '~features/home/navigation/news.navigator';
import { LoginNavigation } from '~features/login';

import { useAppController } from './app.controller';

const Stack = createNativeStackNavigator();

const routingInstrumentation = new Sentry.ReactNavigationInstrumentation();

Sentry.init({
  dsn: AppConfiguration.sentry.dsn,
  environment: AppConfiguration.environment,
  debug: AppConfiguration.environment === 'development',
  enabled: AppConfiguration.environment !== 'development',
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 0.25,
  integrations: [
    new Sentry.ReactNativeTracing({
      routingInstrumentation,
    }),
  ],
});

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
    navigationRef,
  } = useAppController();

  const onNavigationReady = useCallback(() => {
    routingInstrumentation.registerNavigationContainer(navigationRef);
  }, [navigationRef]);

  return (
    <ThemeProvider value={theme}>
      <NavigationContainer
        ref={navigationRef}
        onReady={onNavigationReady}
        theme={navigationTheme}
      >
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

export const App = Sentry.wrap(AppComponent);
