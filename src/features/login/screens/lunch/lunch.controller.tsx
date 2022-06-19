import { getLunchScreenStyles } from './lunch.style';
import { extendTheme, useTheme } from 'react-native-nucleus-ui';
import { useNavigation } from '@react-navigation/native';
import { FLOWS, SCREENS } from '../../../common/navigation/screen.const';
import {
  LUNCH_SCREEN_THEME_DARK,
  LUNCH_SCREEN_THEME_LIGHT,
  LunchScreenTheme,
} from './lunch.theme';

export function useLunchScreenController() {
  const theme = useTheme();
  const navigation = useNavigation();
  const extendedTheme = extendTheme<LunchScreenTheme>(theme, {
    light: LUNCH_SCREEN_THEME_LIGHT,
    dark: LUNCH_SCREEN_THEME_DARK,
  });
  const styles = getLunchScreenStyles(extendedTheme);
  const goToSignInScreen = () => {
    navigation.navigate(FLOWS.LOGIN, {
      screen: SCREENS.LOGIN_LOGIN,
    });
  };
  const goToSignUpScreen = () => {
    navigation.navigate(FLOWS.LOGIN, {
      screen: SCREENS.LOGIN_SIGN_UP,
    });
  };
  return {
    styles,
    goToSignInScreen,
    goToSignUpScreen,
  };
}
