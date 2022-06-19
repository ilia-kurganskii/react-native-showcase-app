import React from 'react';
import { KeyboardAvoidingView, ScrollView, Text } from 'react-native';
import { Button, TextField } from 'react-native-nucleus-ui';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { useSignUpController } from './sign-up.controller';

function SignUpScreenComponent() {
  const { signUp, styles } = useSignUpController();
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
