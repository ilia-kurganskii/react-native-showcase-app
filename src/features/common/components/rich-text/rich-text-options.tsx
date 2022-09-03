import { Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import React, { ReactNode } from 'react';
import { Linking, Text, View } from 'react-native';
import { ExtendedTheme } from 'react-native-nucleus-ui';

import {
  RichTextNode,
  RichTextNodeProps,
} from '~features/common/components/rich-text/components/rich-text-node';
import { getRichTextStyle } from '~features/common/components/rich-text/rich-text.style';

import { RichTextTheme } from './rich-text.theme';

export function getRichTextRenderOptions(
  theme: ExtendedTheme<RichTextTheme>
): Options {
  const styles = getRichTextStyle(theme);
  return {
    renderMark: {
      [MARKS.BOLD]: (node: ReactNode) => {
        if (React.isValidElement(node)) {
          return React.createElement<RichTextNodeProps>(RichTextNode, {
            ...node.props,
            bold: true,
          });
        }
      },
      [MARKS.ITALIC]: (node: ReactNode) => {
        if (React.isValidElement(node)) {
          return React.createElement<RichTextNodeProps>(RichTextNode, {
            ...node.props,
            italic: true,
          });
        }
      },
      [MARKS.UNDERLINE]: (node: ReactNode) => {
        if (React.isValidElement(node)) {
          return React.createElement<RichTextNodeProps>(RichTextNode, {
            ...node.props,
            underline: true,
          });
        }
      },
      [MARKS.CODE]: (node: ReactNode) => {
        if (React.isValidElement(node)) {
          return React.createElement<RichTextNodeProps>(RichTextNode, {
            ...node.props,
            code: true,
          });
        }
      },
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <View>
          <Text style={styles.heading1}>{children}</Text>
        </View>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <View>
          <Text style={styles.heading2}>{children}</Text>
        </View>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <View>
          <Text style={styles.heading3}>{children}</Text>
        </View>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <View>
          <Text style={styles.heading4}>{children}</Text>
        </View>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <View>
          <Text style={styles.heading5}>{children}</Text>
        </View>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <View>
          <Text style={styles.heading6}>{children}</Text>
        </View>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Text style={styles.paragraph}>{children}</Text>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <Text style={styles.text}>{children}</Text>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <View style={styles.ul}>{children}</View>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <View style={styles.ul}>{children}</View>
      ),
      [BLOCKS.DOCUMENT]: (node, children) => (
        <View style={styles.document}>{children}</View>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
        <Text style={styles.text}>{children}</Text>
      ),
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => (
        <Text style={styles.text}>{children}</Text>
      ),
      [BLOCKS.HR]: (node, children) => (
        <Text style={styles.text}>{children}</Text>
      ),
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <Text
            onPress={() => Linking.openURL(node.data.uri)}
            style={styles.link}
          >
            {children}
          </Text>
        );
      },
    },
    renderText: (text: string) => {
      return <RichTextNode>{text}</RichTextNode>;
    },
  };
}
