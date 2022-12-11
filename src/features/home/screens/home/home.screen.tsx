import React, { memo, useCallback } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TestIds } from '~features/common';
import { NewsItem } from '~features/home/stores/news/news.type';

import { NewsHeaderItem } from './components/news-header-item';
import { NewsListItem } from './components/news-list-item';
import { useHomeController } from './home.controller';

function HomeScreenComponent() {
  const {
    news,
    headerNews,
    refresh,
    isRefreshing,
    loadMore,
    openDetails,
    styles,
  } = useHomeController();
  const renderNewsItem = useCallback(
    (info: ListRenderItemInfo<NewsItem>) => (
      <NewsListItem
        id={info.item.id}
        imageUrl={info.item.thumbnail}
        onPress={openDetails}
        subtitle=""
        title={info.item.title ?? ''}
      />
    ),
    [openDetails]
  );

  const renderHeader = useCallback(
    () => (
      <NewsHeaderItem
        id={headerNews?.id}
        imageUrl={headerNews?.thumbnail}
        onPress={openDetails}
        subtitle=""
        testID={TestIds.Home.HeaderNews}
        title={headerNews?.title ?? ''}
      />
    ),
    [headerNews, openDetails]
  );

  return (
    <SafeAreaView edges={['top']} testID={TestIds.Home.Screen}>
      <FlatList
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.news_container}
        data={news}
        keyExtractor={extractId}
        onEndReached={loadMore}
        onRefresh={refresh}
        refreshing={isRefreshing}
        renderItem={renderNewsItem}
      />
    </SafeAreaView>
  );
}

function extractId(newsItem: NewsItem) {
  return newsItem.id;
}

export const HomeScreen = memo(HomeScreenComponent);
