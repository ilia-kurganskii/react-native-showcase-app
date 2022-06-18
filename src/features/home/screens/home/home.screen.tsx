import React from 'react';
import { Button, Text } from 'react-native';
import { useHomeController } from './home.controller';
import { SafeAreaView } from 'react-native-safe-area-context';

export function HomeScreen() {
  const { logout } = useHomeController();
  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <Button title="Logout" onPress={logout} />
    </SafeAreaView>
  );
}
