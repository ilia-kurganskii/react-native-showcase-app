import { useAuthStore } from '../../../auth/stores/auth/use-auth-store';
import { useTheme } from 'react-native-nucleus-ui';
import { getSignUpScreenStyles } from './sign-up.style';
import { extendThemeWithSignUp } from './sign-up.theme';
import { useSignUpForm } from './sign-up.form';
import { useCallback, useRef } from 'react';
import { TextInput } from 'react-native';
import { LoginFormValues } from '../login/login.form';
import { useDialogStore } from '../../../dialogs/stores/dialogs';

export function useSignUpController() {
  const passwordRef = useRef<TextInput>(null);

  const authStore = useAuthStore();
  const dialogsStore = useDialogStore();
  const theme = useTheme();
  const signup = useCallback(
    async (values: LoginFormValues) => {
      try {
        await authStore.signUpEmailAndPassword({
          login: values.email,
          password: values.password,
        });
      } catch (e: unknown) {
        const message = e instanceof Error ? e.message : 'Try again later';
        dialogsStore.showDialog({
          title: 'Something went wrong',
          message: message,
          actionButton: {
            title: 'Okay',
            action: (actions) => actions.close(),
          },
        });
      }
    },
    [authStore, dialogsStore]
  );
  const form = useSignUpForm(signup);
  const styles = getSignUpScreenStyles(extendThemeWithSignUp(theme));

  const focusOnPassword = useCallback(() => {
    passwordRef.current?.focus();
  }, [passwordRef]);

  return {
    signUp: form.submitForm,
    styles,
    emailField: form.emailField,
    passwordField: form.passwordField,
    passwordRef,
    focusOnPassword,
  };
}
