import React from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-nucleus-ui';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSignUpController } from './sign-up.controller';

export function SignUpScreen() {
  const { signUp } = useSignUpController();
  return (
    <SafeAreaView testID="sign-up-screen">
      <Text>Create account</Text>
      <Button onPress={signUp} title="Create account" />
    </SafeAreaView>
  );
}
