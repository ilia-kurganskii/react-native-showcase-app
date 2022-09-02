import { Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import React from 'react';
import { Text } from 'react-native';
import { ExtendedTheme } from 'react-native-nucleus-ui';

import { getRichTextStyle } from '~features/common/components/rich-text/rich-text.style';

import { RichTextTheme } from './rich-text.theme';

export function getRichTextRenderOptions(
  theme: ExtendedTheme<RichTextTheme>
): Options {
  const styles = getRichTextStyle(theme);
  return {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <Text style={styles.heading1}>{children}</Text>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <Text style={styles.heading2}>{children}</Text>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <Text style={styles.heading3}>{children}</Text>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Text style={styles.text}>{children}</Text>
      ),
    },
    renderText: (text: string) => {
      return <Text style={styles.text}>{text}</Text>;
    },
  };
}
