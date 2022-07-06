import { StyleSheet } from 'react-native';

export const centerSheetStyle = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#00000050',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  popover: {
    width: 400,
    maxWidth: '95%',
    alignItems: 'center',
  },
});
