import { compiler } from 'markdown-to-jsx';
import React from 'react';
import { View, ViewProps } from 'react-native';

import { createElement } from './markdown.utils';

export interface MarkdownProps extends ViewProps {
  content?: string | null;
}

function MarkdownComponent(props: MarkdownProps) {
  const { content, ...viewProps } = props;
  let compiledContent = compiler(content ?? '', {
    wrapper: null,
    forceBlock: false,
    createElement: createElement,
  });
  if (Array.isArray(compiledContent)) {
    // @ts-ignore
    compiledContent = compiledContent.filter(
      (item) => typeof item !== 'string'
    );
  }
  return <View {...viewProps} children={compiledContent} />;
}

export const Markdown = React.memo(MarkdownComponent);
