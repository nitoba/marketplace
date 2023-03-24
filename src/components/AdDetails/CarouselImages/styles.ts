import { THEME } from '@theme/index'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 280,
    position: 'relative',
  },

  indicatorContainer: {
    position: 'absolute',
    bottom: 4,
    left: 0,
    width: '100%',
    flexDirection: 'row',
    columnGap: 4,
    paddingHorizontal: 4,
  },

  indicatorTrack: {
    height: 4,
    backgroundColor: THEME.COLORS.GRAY_100,
    opacity: 0.5,
    flex: 1,
    borderRadius: 2,
  },

  indicatorThumb: {
    height: 4,
    backgroundColor: THEME.COLORS.BLUE,
    flex: 1,
    borderRadius: 2,
  },
})
