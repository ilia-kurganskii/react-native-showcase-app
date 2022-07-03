import React, { useCallback } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { useTheme } from 'react-native-nucleus-ui';

import { extendThemeWithHome } from '../../home.theme';
import { getNewsListItemStyle } from './news-list-item.style';

export interface HomeNewsItemProps
  extends Omit<TouchableOpacityProps, 'onPress'> {
  title: string;
  subtitle: string;
  imageUrl: string;
  id: string;
  onPress: (id: string) => void;
}

function NewsListItemComponent(props: HomeNewsItemProps) {
  let { imageUrl, title, subtitle, id, onPress } = props;
  const theme = useTheme();
  const onItemPress = useCallback(() => onPress(id), [id, onPress]);
  const styles = getNewsListItemStyle(extendThemeWithHome(theme));
  return (
    <TouchableOpacity onPress={onItemPress} style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.text}>
        <Text lineBreakMode="tail" numberOfLines={2} style={styles.text__title}>
          {title}
        </Text>
        <Text
          lineBreakMode="tail"
          numberOfLines={1}
          style={styles.text__subtitle}
        >
          {subtitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export const NewsListItem = React.memo(NewsListItemComponent);
