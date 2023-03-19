import { THEME } from '@theme/index'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: THEME.COLORS.GRAY_100,
    paddingHorizontal: 16,
    paddingVertical: 12,
    columnGap: 8,
    borderRadius: 6,
    width: '100%',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  input: {
    flex: 1,
    rowGap: 4,
  },

  errorMessage: {
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: 12,
    color: THEME.COLORS.RED_LIGHT,
  },
})
