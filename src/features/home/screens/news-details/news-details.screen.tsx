import React, { memo } from 'react';
import { Image, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RichText, TestIds } from '~features/common';

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
        {news?.content ? (
          <RichText content={news.content} style={styles.text} />
        ) : null}
      </SafeAreaView>
    </ScrollView>
  );
}

export const NewsDetailsScreen = memo(NewsDetailsScreenComponent);
