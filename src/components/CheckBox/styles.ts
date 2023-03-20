import { THEME } from '@theme/index'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
  },

  checkBox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: THEME.COLORS.GRAY_600,
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: 16,
  },
})
