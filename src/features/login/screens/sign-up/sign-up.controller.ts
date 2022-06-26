import { useCallback, useRef } from 'react';
import { TextInput } from 'react-native';
import { useTheme } from 'react-native-nucleus-ui';

import { useAuthStore } from '~features/auth';
import { useDialogStore } from '~features/dialogs';

import { SignUpFormValues, useSignUpForm } from './sign-up.form';
import { getSignUpScreenStyles } from './sign-up.style';
import { extendThemeWithSignUp } from './sign-up.theme';

export function useSignUpController() {
  const passwordRef = useRef<TextInput>(null);

  const authStore = useAuthStore();
  const dialogsStore = useDialogStore();
  const theme = useTheme();
  const signup = useCallback(
    async (values: SignUpFormValues) => {
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
