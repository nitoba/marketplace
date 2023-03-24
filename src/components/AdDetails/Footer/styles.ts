import { THEME } from '@theme/index'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: THEME.COLORS.GRAY_100,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 32,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    color: THEME.COLORS.BLUE,
    fontFamily: THEME.FONTS.BOLD,
    fontSize: 24,
  },
  currency: {
    fontSize: 14,
  },
})
