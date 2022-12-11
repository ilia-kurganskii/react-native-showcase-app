import { useCallback, useRef } from 'react';
import { TextInput } from 'react-native';
import { useTheme } from 'react-native-nucleus-ui';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '~features/app';
import { authSelectors } from '~features/auth/stores/auth/auth.selectors';
import { authActions } from '~features/auth/stores/auth/auth.slice';

import { SignUpFormValues, useSignUpForm } from './sign-up.form';
import { getSignUpScreenStyles } from './sign-up.style';
import { extendThemeWithSignUp } from './sign-up.theme';

export function useSignUpController() {
  const passwordRef = useRef<TextInput>(null);
  const isLoading = useAppSelector(authSelectors.selectIsLoading);
  const dispatch = useDispatch();
  const theme = useTheme();
  const signup = useCallback(
    async (values: SignUpFormValues) => {
      dispatch(
        authActions.signUpByEmail({
          email: values.email,
          password: values.password,
        })
      );
    },
    [dispatch]
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
    isLoading,
  };
}
