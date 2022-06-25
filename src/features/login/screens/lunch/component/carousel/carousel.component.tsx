import React, { useState } from 'react';
import {
  Image,
  ImageSourcePropType,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  Text,
  View,
  ViewProps,
} from 'react-native';
import { getCarouselStyle } from './carousel.style';
import { PageControls, useTheme } from 'react-native-nucleus-ui';
import { extendThemeWithCarousel } from './carousel.theme';

export interface CarouselProps extends ViewProps {
  values: {
    image: ImageSourcePropType;
    id: string;
    text: string;
  }[];
}

function CarouselComponent(props: CarouselProps) {
  let { values, ...viewProps } = props;
  const theme = useTheme();
  const carouselStyle = getCarouselStyle(extendThemeWithCarousel(theme));
  const [width, setWidth] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const setItemWidth = (event: LayoutChangeEvent) => {
    if (!width) {
      setWidth(event.nativeEvent.layout.width);
    }
  };
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const newSelectedIndex = Math.round(
      event.nativeEvent.contentOffset.x / width
    );
    if (newSelectedIndex !== selectedIndex) {
      setSelectedIndex(newSelectedIndex);
    }
  };
  return (
    <View {...viewProps}>
      <ScrollView
        contentContainerStyle={carouselStyle.scrollContainer}
        decelerationRate="fast"
        disableIntervalMomentum={true}
        disableScrollViewPanResponder={true}
        horizontal={true}
        onLayout={setItemWidth}
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        snapToInterval={width}
      >
        {values.map((value) => (
          <View key={value.id} style={[carouselStyle.itemContainer, { width }]}>
            <Image source={value.image} style={carouselStyle.image} />
            <Text style={carouselStyle.text}>{value.text}</Text>
          </View>
        ))}
      </ScrollView>
      <PageControls
        count={values.length}
        selectedIndex={selectedIndex}
        style={carouselStyle.pageControls}
      />
    </View>
  );
}

export const Carousel = React.memo(CarouselComponent);
