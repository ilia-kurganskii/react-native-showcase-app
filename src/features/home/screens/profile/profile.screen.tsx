import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text } from 'react-native';
import { Button } from 'react-native-nucleus-ui';

import { ProfileItem } from './components/profile-item';
import { useProfileController } from './profile.controller';

export function ProfileScreen() {
  const { userName, styles, logout } = useProfileController();
  const { t } = useTranslation();
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.label}>{t('profile.account-information')}</Text>
      <ProfileItem label="First Name" value={userName ?? 'Unknown'} />
      <Button
        appearance="transparent"
        onPress={logout}
        size="large"
        style={styles.logoutButton}
        title={t('profile.logout')}
      />
    </ScrollView>
  );
}
