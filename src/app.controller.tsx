import { useCallback, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { DARK_THEME, LIGHT_THEME } from 'react-native-nucleus-ui';
import SplashScreen from 'react-native-splash-screen';

import { useAuthStore } from '~features/auth';
import { NavigationThemeDark, NavigationThemeLight } from '~features/common';
import { useI18nStore } from '~features/i18n';

export function useAppController() {
  const authStore = useAuthStore();
  const i18nStore = useI18nStore();
  const [isLoading, setIsLoading] = useState(false);
  const [isSplashScreenVisible, setIsSplashScreenVisible] = useState(true);
  const [isSplashScreenEnabled, setIsSplashScreenEnabled] = useState(false);

  const onSplashScreenAnimationFinished = useCallback(
    () => setIsSplashScreenVisible(false),
    []
  );

  useEffect(() => {
    async function init() {
      try {
        await authStore.onCreate();
        await i18nStore.init();
      } finally {
        await new Promise((resolve) => setTimeout(resolve, 100));
        SplashScreen.hide();
        setIsSplashScreenEnabled(true);
        setIsLoading(false);
      }
    }
    init().catch(console.log);
    return () => authStore.onDestroy();
  }, [authStore, i18nStore]);

  const deviceTheme = useColorScheme();

  const [theme, navigationTheme] =
    deviceTheme === 'dark'
      ? [DARK_THEME, NavigationThemeDark]
      : [LIGHT_THEME, NavigationThemeLight];
  return {
    theme,
    navigationTheme,
    isSignedIn: authStore.state === 'signedIn',
    isLoading,
    onSplashScreenAnimationFinished,
    isSplashScreenVisible,
    isSplashScreenEnabled,
  };
}
