import React from 'react';
import { Image, Linking, ScrollView, Text, View } from 'react-native';

import { markdownStyles } from './markdown.styles';

export function createElement(
  tag: Parameters<typeof React.createElement>[0],
  props: any,
  ...children: React.ReactChild[]
): JSX.Element {
  switch (tag) {
    case 'h1':
      return <Text children={children} style={markdownStyles.h1} />;
    case 'h2':
      return <Text children={children} style={markdownStyles.h2} />;
    case 'h3':
      return <Text children={children} style={markdownStyles.h3} />;
    case 'strong':
      return (
        <Text
          children={children}
          key={'strong' + props.key}
          style={markdownStyles.strong}
        />
      );
    case 'p':
    case 'em':
    case 'be':
      if (hasText(children)) {
        return <Text children={children} style={markdownStyles.p} />;
      }
      // @ts-ignore
      return children;
    case 'pre':
      return (
        <ScrollView
          children={children}
          contentContainerStyle={markdownStyles.pre}
          horizontal={true}
        />
      );
    case 'code':
      return (
        <Text
          children={['\u00A0', children, '\u00A0']}
          style={markdownStyles.code__text}
        />
      );
    case 'ul':
      return <View children={children} style={markdownStyles.ul} />;
    case 'li':
      return (
        <View style={markdownStyles.ul__li}>
          <Text style={markdownStyles.ul__li__text}>{'-'}</Text>
          <Text children={children} style={markdownStyles.li} />
        </View>
      );
    case 'ol':
      return <View children={children} style={markdownStyles.ul} />;
    case 'blockquote':
      return <View children={children} style={markdownStyles.blockquote} />;
    case 'a':
      return (
        <Text
          children={children}
          onPress={() => Linking.openURL(props.href)}
          style={markdownStyles.a}
        />
      );
    case 'br':
      return <Text>{'\n'}</Text>;
    case 'img':
      return (
        <Image
          accessibilityLabel={props.alt}
          source={{ uri: props.src }}
          style={markdownStyles.img}
        />
      );
    case 'hr':
      return <View style={markdownStyles.hr} />;
    default:
      console.log(
        `Unsupported type: ${tag}. Props: ${JSON.stringify(
          props
        )} with content: ${children}`
      );
      return <></>;
  }
}

function hasText(children: React.ReactChild[] | React.ReactChild): boolean {
  if (Array.isArray(children)) {
    return children.some((item) => hasText(item));
  }
  return typeof children === 'string';
}
