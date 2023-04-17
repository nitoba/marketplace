import { THEME } from '@theme/index'
import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },

  text: {
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: THEME.FONTS.SIZES.md,
    color: THEME.COLORS.GRAY_600,
  },

  containerRadio: {
    width: THEME.SPACES[6],
    height: THEME.SPACES[6],
    borderWidth: 1,
    borderColor: THEME.COLORS.GRAY_700,
    borderRadius: THEME.SPACES[6] / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    width: THEME.SPACES[4],
    height: THEME.SPACES[4],
    backgroundColor: THEME.COLORS.BLUE_LIGHT,
    borderRadius: THEME.SPACES[6] / 2,
  },
})
