import React from 'react';
import { KeyboardAvoidingView, ScrollView, Text } from 'react-native';
import { Button, TextField } from 'react-native-nucleus-ui';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { keyboardBehaviorPreset } from '~features/common';

import { useLoginController } from './login.controller';

export function LoginScreen() {
  const {
    submitForm,
    styles,
    passwordField,
    emailField,
    passwordRef,
    focusOnPassword,
  } = useLoginController();
  const { top } = useSafeAreaInsets();
  return (
    <KeyboardAvoidingView
      behavior={keyboardBehaviorPreset}
      keyboardVerticalOffset={top + 10}
      style={styles.keyboardView}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        testID="sign-up-screen"
      >
        <SafeAreaView edges={['bottom']} style={styles.safeContainer}>
          <Text style={styles.label}>Email</Text>
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
            textContentType="emailAddress"
          />
          <Text style={styles.error}>{emailField.error ?? ' '}</Text>

          <Text style={styles.label}>Password</Text>
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
          />
          <Text style={styles.error}>{passwordField.error}</Text>

          <Button
            onPress={submitForm}
            size="block"
            style={styles.button}
            title="Login"
          />
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
