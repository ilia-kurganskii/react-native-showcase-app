import React from 'react';
import { KeyboardAvoidingView, ScrollView, Text } from 'react-native';
import { Button, TextField } from 'react-native-nucleus-ui';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { keyboardBehaviorPreset } from '~features/common';

import { useSignUpController } from './sign-up.controller';

function SignUpScreenComponent() {
  const {
    signUp,
    styles,
    passwordField,
    emailField,
    passwordRef,
    focusOnPassword,
  } = useSignUpController();

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
            value={emailField.value}
          />
          <Text style={styles.error}>{emailField.error ?? ' '}</Text>

          <Text style={styles.label}>Password</Text>
          <TextField
            ref={passwordRef}
            error={passwordField.hasError}
            onBlur={passwordField.onBlur}
            onChangeText={passwordField.onChange}
            onSubmitEditing={signUp}
            returnKeyType="done"
            secureTextEntry={true}
            style={styles.input}
            value={passwordField.value}
          />
          <Text style={styles.error}>{passwordField.error}</Text>

          <Button
            onPress={signUp}
            size="block"
            style={styles.button}
            title="Create account"
          />
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export const SignUpScreen = React.memo(SignUpScreenComponent);
