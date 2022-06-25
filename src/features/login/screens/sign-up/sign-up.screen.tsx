import React from 'react';
import { KeyboardAvoidingView, ScrollView, Text } from 'react-native';
import { Button, TextField } from 'react-native-nucleus-ui';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
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
            value={emailField.value}
            onChangeText={emailField.onChange}
            onBlur={emailField.onBlur}
            error={emailField.hasError}
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoComplete="email"
            returnKeyType="next"
            onSubmitEditing={focusOnPassword}
            style={styles.input}
          />
          <Text style={styles.error}>{emailField.error}</Text>

          <Text style={styles.label}>Password</Text>
          <TextField
            ref={passwordRef}
            value={passwordField.value}
            onChangeText={passwordField.onChange}
            onBlur={passwordField.onBlur}
            error={passwordField.hasError}
            secureTextEntry={true}
            returnKeyType="done"
            onSubmitEditing={signUp}
            style={styles.input}
          />
          <Text style={styles.error}>{passwordField.error}</Text>

          <Button
            title="Create account"
            style={styles.button}
            onPress={signUp}
            size="large"
          />
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export const SignUpScreen = React.memo(SignUpScreenComponent);
