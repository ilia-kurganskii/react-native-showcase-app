import { StyleSheet } from 'react-native';
import { Colors, TypographyPresets } from 'react-native-nucleus-ui';

export const markdownStyles = StyleSheet.create({
  h1: {
    ...TypographyPresets.Title2,
    marginTop: 12,
    marginBottom: 13,
  },
  h2: {
    ...TypographyPresets.Title3,
    marginTop: 12,
    marginBottom: 13,
  },
  h3: {
    ...TypographyPresets.Large.Normal.Bold,
    marginTop: 6,
    marginBottom: 7,
  },
  strong: {
    ...TypographyPresets.Regular.Normal.Bold,
    lineHeight: 28,
  },
  p: {
    ...TypographyPresets.Regular.Normal.Regular,
    lineHeight: 28,
    marginBottom: 8,
  },
  pre: {
    paddingLeft: 16,
    paddingRight: 8,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 4,
    marginTop: 8,
    minWidth: '100%',
    backgroundColor: Colors.sky.light,
    marginBottom: 12,
  },
  code__text: {
    ...TypographyPresets.Regular.Normal.Regular,
    lineHeight: 28,
    color: Colors.ink.darkest,
    backgroundColor: Colors.sky.light,
  },
  ul: {
    marginTop: 4,
    flexDirection: 'column',
    marginBottom: 12,
  },
  ul__li: {
    flexDirection: 'row',
  },
  ul__li__text: {
    ...TypographyPresets.Regular.Normal.Regular,
    lineHeight: 28,
    marginRight: 4,
  },
  blockquote: {
    marginTop: 10,
    marginBottom: 10,
    borderLeftWidth: 2,
    borderLeftColor: Colors.ink.darkest,
    paddingLeft: 12,
  },
  li: {
    ...TypographyPresets.Regular.Normal.Regular,
    lineHeight: 28,
    flex: 1,
  },
  img: {
    marginTop: 16,
    marginBottom: 16,
    width: '100%',
    height: 200,
  },
  hr: {
    marginTop: 8,
    marginBottom: 8,
    height: 1,
    width: '100%',
    backgroundColor: Colors.ink.darkest,
  },
  a: {
    ...TypographyPresets.Regular.Normal.Regular,
    color: Colors.primary.base,
    textDecorationLine: 'underline',
    lineHeight: 28,
  },
  unsupported: {
    backgroundColor: Colors.red.base,
  },
});
