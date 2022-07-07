import { StyleSheet } from 'react-native';
import { createThemedStyleSheet, ExtendedTheme } from 'react-native-nucleus-ui';

import { BottomSheetTheme } from './bottom-sheet.theme';

export const getBottomSheetStyles = createThemedStyleSheet(
  (theme: ExtendedTheme<BottomSheetTheme>) => ({
    container: {
      ...StyleSheet.absoluteFillObject,
      position: 'absolute',
      flex: 1,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.bottomSheet.overlay,
      position: 'absolute',
    },
    background: {
      ...StyleSheet.absoluteFillObject,
    },
    sheet: {
      marginTop: 'auto',
      backgroundColor: theme.bottomSheet.sheet,
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
      backgroundColor: theme.bottomSheet.knob,
      height: 6,
      width: 48,
      borderRadius: 3,
    },
  })
);
