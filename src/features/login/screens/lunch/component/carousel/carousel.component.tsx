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
import { carouselStyle } from './carousel.style';
import { PageControls } from 'react-native-nucleus-ui';

export interface CarouselProps extends ViewProps {
  values: {
    image: ImageSourcePropType;
    id: string;
    text: string;
  }[];
}

function CarouselComponent(props: CarouselProps) {
  let { values, ...viewProps } = props;
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
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        disableScrollViewPanResponder={true}
        snapToAlignment="start"
        disableIntervalMomentum={true}
        contentContainerStyle={carouselStyle.scrollContainer}
        horizontal={true}
        onLayout={setItemWidth}
        snapToInterval={width}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        {values.map((value) => (
          <View style={[carouselStyle.itemContainer, { width }]} key={value.id}>
            <Image style={carouselStyle.image} source={value.image} />
            <Text style={carouselStyle.text}>{value.text}</Text>
          </View>
        ))}
      </ScrollView>
      <PageControls
        style={carouselStyle.pageControls}
        count={values.length}
        selectedIndex={selectedIndex}
      />
    </View>
  );
}

export const Carousel = React.memo(CarouselComponent);
