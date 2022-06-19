import React from 'react';
import { KeyboardAvoidingView, ScrollView, Text } from 'react-native';
import { Button, TextField } from 'react-native-nucleus-ui';
import { useLoginController } from './login.controller';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

export function LoginScreen() {
  const { login, styles } = useLoginController();
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
          />

          <Text style={styles.label}>Password</Text>
          <TextField secureTextEntry={true} style={styles.input} />

          <Button
            title="Login"
            style={styles.button}
            onPress={login}
            size="large"
          />
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
