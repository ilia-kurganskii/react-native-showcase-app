import 'i18next';
import ns1 from './features/i18n/resources/en/translation.json';

declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'ns1';
    resources: {
      ns1: typeof ns1;
    };
  }
}
