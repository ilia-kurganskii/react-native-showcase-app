import React, { ReactElement } from 'react';
import { Text, TextProps } from 'react-native';
import { useTheme } from 'react-native-nucleus-ui';

import { getFontStyle } from './rich-text-node.style';

export interface RichTextNodeProps extends TextProps {
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
  bold?: boolean;
}

export function RichTextNode(props: RichTextNodeProps): ReactElement {
  let {
    italic = false,
    bold = false,
    underline = false,
    style,
    ...textProps
  } = props;
  const theme = useTheme();
  const fontStyle = getFontStyle({
    theme,
    italic,
    bold,
    underline,
  });
  return <Text style={[fontStyle, style]} {...textProps} />;
}
