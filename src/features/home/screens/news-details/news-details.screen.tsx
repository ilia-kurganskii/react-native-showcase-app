import { observer } from 'mobx-react-lite';
import React from 'react';
import { Image, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TestIds } from '~features/common';

import { useNewsDetailsController } from './news-details.controller';

function NewsDetailsScreenComponent() {
  const { news, styles } = useNewsDetailsController();
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      testID={TestIds.NewsDetails.Screen}
    >
      <SafeAreaView edges={['bottom']}>
        <Text style={styles.title}>{news?.title}</Text>
        <Image source={{ uri: news?.thumbnail }} style={styles.image} />
        {news?.content.map((text, index) => (
          <Text key={index} style={styles.text}>
            {text}
          </Text>
        ))}
      </SafeAreaView>
    </ScrollView>
  );
}

export const NewsDetailsScreen = observer(NewsDetailsScreenComponent);
