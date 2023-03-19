import { THEME } from '@theme/index'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 12,
    columnGap: 8,
    borderRadius: 6,
    alignSelf: 'center',
  },
  text: {
    fontFamily: THEME.FONTS.BOLD,
    fontSize: 14,
  },
  primary: {
    backgroundColor: THEME.COLORS.BLUE_LIGHT,
  },
  secondary: {
    backgroundColor: THEME.COLORS.GRAY_700,
  },
  tertiary: {
    backgroundColor: THEME.COLORS.GRAY_300,
  },

  disabled: {
    opacity: 0.5,
  },
  full: {
    width: '100%',
    alignSelf: 'auto',
  },
})
