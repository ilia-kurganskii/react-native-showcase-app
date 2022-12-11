import { useCallback, useRef } from 'react';
import { TextInput } from 'react-native';
import { useTheme } from 'react-native-nucleus-ui';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '~features/app';
import { authSelectors } from '~features/auth/stores/auth/auth.selectors';
import { authActions } from '~features/auth/stores/auth/auth.slice';

import { LoginFormValues, useLoginForm } from './login.form';
import { getLoginScreenStyles } from './login.style';
import { extendThemeWithLogin } from './login.theme';

export function useLoginController() {
  const passwordRef = useRef<TextInput>(null);
  const dispatch = useDispatch();
  const isLoading = useAppSelector(authSelectors.selectIsLoading);
  const theme = useTheme();
  const styles = getLoginScreenStyles(extendThemeWithLogin(theme));
  const login = useCallback(
    (values: LoginFormValues) => {
      dispatch(
        authActions.loginByEmail({
          email: values.email,
          password: values.password,
        })
      );
    },
    [dispatch]
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
    isLoading,
  };
}
