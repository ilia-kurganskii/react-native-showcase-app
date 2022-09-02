import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from 'react';
import { View, ViewProps } from 'react-native';
import { useTheme } from 'react-native-nucleus-ui';

import { getRichTextRenderOptions } from '~features/common/components/rich-text/rich-text-options';
import { extendThemeWithRichText } from '~features/common/components/rich-text/rich-text.theme';
import { NewsItem } from '~features/home/stores/news';

export interface RichTextProps extends ViewProps {
  content: NonNullable<NewsItem['content']>;
}

function RichTextComponent(props: RichTextProps): React.ReactElement {
  const { content, ...viewProps } = props;
  const theme = useTheme();
  const options = getRichTextRenderOptions(extendThemeWithRichText(theme));
  const richRender = documentToReactComponents(
    content,
    options
  ) as React.ReactElement;
  return <View {...viewProps}>{richRender}</View>;
}

export const RichText = React.memo(RichTextComponent);
