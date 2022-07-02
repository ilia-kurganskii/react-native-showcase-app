import React from 'react';
import { Text, View, ViewProps } from 'react-native';
import { useTheme } from 'react-native-nucleus-ui';

import { extendThemeWithProfile } from '../../profile.theme';
import { getProfileItemStyles } from './profile-item.style';

export interface ProfileItemProps extends ViewProps {
  label: string;
  value: string;
}
function ProfileItemComponent(props: ProfileItemProps) {
  const { value, style, label, ...viewProps } = props;
  const theme = useTheme();
  const styles = getProfileItemStyles(extendThemeWithProfile(theme));
  return (
    <View style={[styles.container, style]} {...viewProps}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}> {value}</Text>
    </View>
  );
}

export const ProfileItem = React.memo(ProfileItemComponent);
