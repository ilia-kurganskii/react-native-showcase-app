import React from 'react';
import { useTranslation } from 'react-i18next';
import { KeyboardAvoidingView, ScrollView, Text } from 'react-native';
import { Button, TextField } from 'react-native-nucleus-ui';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import {
  keyboardBehaviorPreset,
  TestIds,
  LoaderOverlay,
} from '~features/common';

import { useLoginController } from './login.controller';

export function LoginScreen() {
  const {
    submitForm,
    styles,
    passwordField,
    emailField,
    passwordRef,
    focusOnPassword,
    isLoading,
  } = useLoginController();
  const { top } = useSafeAreaInsets();
  const { t } = useTranslation();
  return (
    <KeyboardAvoidingView
      behavior={keyboardBehaviorPreset}
      keyboardVerticalOffset={top + 10}
      style={styles.keyboardView}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        testID={TestIds.Login.Screen}
      >
        <SafeAreaView edges={['bottom']} style={styles.safeContainer}>
          <Text style={styles.label}>{t('login.email-label')}</Text>
          <TextField
            autoCapitalize="none"
            autoComplete="email"
            error={emailField.hasError}
            keyboardType="email-address"
            onBlur={emailField.onBlur}
            onChangeText={emailField.onChange}
            onSubmitEditing={focusOnPassword}
            returnKeyType="next"
            style={styles.input}
            testID={TestIds.Login.EmailInput}
            textContentType="emailAddress"
            value={emailField.value}
          />
          <Text style={styles.error}>{emailField.error ?? ' '}</Text>

          <Text style={styles.label}>{t('login.password-label')}</Text>
          <TextField
            ref={passwordRef}
            autoComplete="password"
            error={passwordField.hasError}
            onBlur={passwordField.onBlur}
            onChangeText={passwordField.onChange}
            onSubmitEditing={submitForm}
            returnKeyType="done"
            secureTextEntry={true}
            style={styles.input}
            testID={TestIds.Login.PasswordInput}
            value={passwordField.value}
          />
          <Text style={styles.error}>{passwordField.error}</Text>

          <Button
            onPress={submitForm}
            size="block"
            style={styles.button}
            testID={TestIds.Login.LoginButton}
            title={t('login.login-btn')}
          />
        </SafeAreaView>
      </ScrollView>
      <LoaderOverlay isVisible={isLoading} />
    </KeyboardAvoidingView>
  );
}
