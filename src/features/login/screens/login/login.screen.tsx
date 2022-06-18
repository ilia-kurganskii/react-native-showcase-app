import React from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-nucleus-ui';
import { useLoginController } from './login.controller';
import { SafeAreaView } from 'react-native-safe-area-context';

export function LoginScreen() {
  const { login } = useLoginController();
  return (
    <SafeAreaView>
      <Text>Login</Text>
      <Button testID="login-button" onPress={login} title="Login" />
    </SafeAreaView>
  );
}
