import React from 'react';
import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useHomeController } from './home.controller';

export function HomeScreen() {
  const { logout } = useHomeController();
  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <Button onPress={logout} title="Logout" />
    </SafeAreaView>
  );
}
