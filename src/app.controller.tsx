import { useCallback, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { DARK_THEME, LIGHT_THEME } from 'react-native-nucleus-ui';
import SplashScreen from 'react-native-splash-screen';

import { useAppSelector, useAppService } from '~features/app';
import { AuthStore } from '~features/auth';
import { isSignerIdSelector } from '~features/auth/stores/auth/auth.selectors';
import { NavigationThemeDark, NavigationThemeLight } from '~features/common';
import { I18nStore } from '~features/i18n';

export function useAppController() {
  const authStore = useAppService(AuthStore);
  const i18nStore = useAppService(I18nStore);
  const [isLoading, setIsLoading] = useState(true);
  const [isSplashScreenVisible, setIsSplashScreenVisible] = useState(true);
  const [isSplashScreenEnabled, setIsSplashScreenEnabled] = useState(false);

  const onSplashScreenAnimationFinished = useCallback(
    () => setIsSplashScreenVisible(false),
    []
  );

  useEffect(() => {
    async function init() {
      try {
        await i18nStore.init();
        await authStore.onCreate();
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

  const isSignedIn = useAppSelector(isSignerIdSelector);

  return {
    theme,
    navigationTheme,
    isSignedIn,
    isLoading,
    onSplashScreenAnimationFinished,
    isSplashScreenVisible,
    isSplashScreenEnabled,
  };
}
