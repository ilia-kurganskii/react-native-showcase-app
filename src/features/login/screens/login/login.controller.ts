import { useCallback, useRef } from 'react';
import { TextInput } from 'react-native';
import { useTheme } from 'react-native-nucleus-ui';

import { useAuthStore } from '~features/auth/stores/auth/use-auth-store';
import { useDialogStore } from '~features/dialogs/stores/dialogs';

import { LoginFormValues, useLoginForm } from './login.form';
import { getLoginScreenStyles } from './login.style';
import { extendThemeWithLogin } from './login.theme';

export function useLoginController() {
  const passwordRef = useRef<TextInput>(null);
  const authStore = useAuthStore();
  const dialogsStore = useDialogStore();
  const theme = useTheme();
  const styles = getLoginScreenStyles(extendThemeWithLogin(theme));
  const login = useCallback(
    async (values: LoginFormValues) => {
      try {
        await authStore.loginByEmailPassword({
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
  const form = useLoginForm(login);

  const focusOnPassword = useCallback(() => {
    passwordRef.current?.focus();
  }, [passwordRef]);

  return {
    submitForm: form.submitForm,
    styles,
    emailField: form.emailField,
    passwordField: form.passwordField,
    passwordRef,
    focusOnPassword,
  };
}
