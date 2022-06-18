import { getLunchScreenStyles } from './lunch.style';
import { useTheme } from 'react-native-nucleus-ui';
import { useNavigation } from '@react-navigation/native';
import { FLOWS, SCREENS } from '../../../common/navigation/screen.const';

export function useLunchScreenController() {
  const theme = useTheme();
  const navigation = useNavigation();
  const styles = getLunchScreenStyles(theme);
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
