import React from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-nucleus-ui';
import { SafeAreaView } from 'react-native-safe-area-context';

export function SignUpScreen() {
  return (
    <SafeAreaView testID="sign-up-screen">
      <Text>Create account</Text>
      <Button title="Create account" />
    </SafeAreaView>
  );
}
