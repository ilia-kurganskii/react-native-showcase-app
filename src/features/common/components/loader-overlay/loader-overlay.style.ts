import { StyleSheet } from 'react-native';

export const loaderOverlayStyle = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#00000050',
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    width: 128,
    height: 128,
  },
});
