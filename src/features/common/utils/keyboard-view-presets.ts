import { Platform } from 'react-native';

export const keyboardBehaviorPreset:
  | 'height'
  | 'position'
  | 'padding'
  | undefined = Platform.select({
  ios: 'padding',
  android: undefined,
});
