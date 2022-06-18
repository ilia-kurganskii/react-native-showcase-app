import { StyleSheet } from 'react-native';
import { Colors, TypographyPresets } from 'react-native-nucleus-ui';

export const carouselStyle = StyleSheet.create({
  scrollContainer: {},
  itemContainer: {
    padding: 16,
    flexDirection: 'column',
  },
  pageControls: {
    marginTop: 47,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
  },
  text: {
    ...TypographyPresets.Title3,
    textAlign: 'center',
    color: Colors.ink.darker,
  },
});
