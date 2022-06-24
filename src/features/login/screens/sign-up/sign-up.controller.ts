import { useAuthStore } from '../../../auth/stores/auth/use-auth-store';
import { useTheme } from 'react-native-nucleus-ui';
import { getSignUpScreenStyles } from './sign-up.style';
import { extendThemeWithSignUp } from './sign-up.theme';
import { useSignUpForm } from './sign-up.form';

export function useSignUpController() {
  const authStore = useAuthStore();
  const theme = useTheme();
  const form = useSignUpForm(({ email, password }) =>
    authStore.signUpEmailAndPassword({ login: email, password: password })
  );
  const styles = getSignUpScreenStyles(extendThemeWithSignUp(theme));

  return {
    signUp: form.submitForm,
    styles,
    emailField: form.emailField,
    passwordField: form.passwordField,
  };
}
