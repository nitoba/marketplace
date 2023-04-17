import { THEME } from '@theme/index'
import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: THEME.FONTS.SIZES.md,
    fontFamily: THEME.FONTS.BOLD,
    color: THEME.COLORS.GRAY_600,
  },
  sectionWrapper: {
    gap: 16,
  },
  condition: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
  },

  errorMessage: {
    fontSize: THEME.FONTS.SIZES.sx,
    fontFamily: THEME.FONTS.REGULAR,
    color: THEME.COLORS.RED_LIGHT,
  },
})
