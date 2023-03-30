import { THEME } from '@theme/index'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GRAY_200,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 24,
  },

  title: {
    fontFamily: THEME.FONTS.BOLD,
    color: THEME.COLORS.GRAY_700,
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
    marginRight: 24,
  },
})
