import React, { useCallback } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-nucleus-ui';

import { extendThemeWithHome } from '../../home.theme';
import { getNewsHeaderItemStyle } from './news-header-item.style';

export interface HomeHeaderItemProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  id: string;
  onPress: (id: string) => void;
}

function NewsHeaderItemComponent(props: HomeHeaderItemProps) {
  let { imageUrl, title, subtitle, onPress, id } = props;
  const theme = useTheme();
  const onItemPress = useCallback(() => onPress(id), [id, onPress]);
  const styles = getNewsHeaderItemStyle(extendThemeWithHome(theme));
  return (
    <TouchableOpacity onPress={onItemPress} style={styles.container}>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Text style={styles.title}>Good morning</Text>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text lineBreakMode="tail" numberOfLines={2} style={styles.text__title}>
        {title}
      </Text>
      <Text numberOfLines={1} style={styles.text__subtitle}>
        {subtitle}
      </Text>
    </TouchableOpacity>
  );
}

export const NewsHeaderItem = React.memo(NewsHeaderItemComponent);
