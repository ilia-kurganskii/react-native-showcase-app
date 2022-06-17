import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-nucleus-ui';
import { useLoginController } from './login.controller';

export function LoginScreen() {
  const { login } = useLoginController();
  return (
    <View>
      <Text>Login</Text>
      <Button testID="login-button" onPress={login} title="Login" />
    </View>
  );
}
