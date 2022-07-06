import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-nucleus-ui';

export const bottomSheetStyle = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#00000050',
    position: 'absolute',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  sheet: {
    marginTop: 'auto',
    backgroundColor: Colors.sky.white,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    overflow: 'hidden',
    alignItems: 'center',
    width: '100%',
  },
  line: {
    paddingTop: 8,
    paddingBottom: 16,
    width: '100%',
    alignItems: 'center',
  },
  line__knob: {
    backgroundColor: Colors.sky.base,
    height: 6,
    width: 48,
    borderRadius: 3,
  },
});
