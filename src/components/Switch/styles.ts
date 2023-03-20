import { THEME } from '@theme/index'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  track: {
    width: 50,
    height: 28,
    borderRadius: 9999,
    backgroundColor: THEME.COLORS.GRAY_300,
    position: 'relative',
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: THEME.COLORS.GRAY_100,
    borderRadius: 9999,
    position: 'absolute',
    top: 2,
    left: 2,
  },
})
