import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Button } from 'react-native-nucleus-ui';

import { ProfileItem } from './components/profile-item';
import { useProfileController } from './profile.controller';

export function ProfileScreen() {
  const { userName, styles, logout } = useProfileController();
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.label}>ACCOUNT INFORMATION </Text>
      <ProfileItem label="First Name" value={userName} />
      <Button
        appearance="transparent"
        onPress={logout}
        size="large"
        style={styles.logoutButton}
        title="Logout"
      />
    </ScrollView>
  );
}
