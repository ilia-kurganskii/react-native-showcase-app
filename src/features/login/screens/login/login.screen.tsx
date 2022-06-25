import React from 'react';
import { KeyboardAvoidingView, ScrollView, Text } from 'react-native';
import { Button, TextField } from 'react-native-nucleus-ui';
import { useLoginController } from './login.controller';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

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
      behavior="padding"
      keyboardVerticalOffset={top + 10}
      style={styles.keyboardView}
    >
      <ScrollView
        testID="sign-up-screen"
        contentContainerStyle={styles.scrollContainer}
      >
        <SafeAreaView edges={['bottom']} style={styles.safeContainer}>
          <Text style={styles.label}>Email</Text>
          <TextField
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            style={styles.input}
            onChangeText={emailField.onChange}
            onBlur={emailField.onBlur}
            error={emailField.hasError}
            autoComplete="email"
            returnKeyType="next"
            onSubmitEditing={focusOnPassword}
          />
          <Text style={styles.error}>{emailField.error}</Text>

          <Text style={styles.label}>Password</Text>
          <TextField
            ref={passwordRef}
            style={styles.input}
            onChangeText={passwordField.onChange}
            onBlur={passwordField.onBlur}
            error={passwordField.hasError}
            secureTextEntry={true}
            returnKeyType="done"
            onSubmitEditing={submitForm}
          />
          <Text style={styles.error}>{passwordField.error}</Text>

          <Button
            title="Login"
            style={styles.button}
            onPress={submitForm}
            size="large"
          />
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
