import { THEME } from '@theme/index'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GRAY_100,
    padding: 24,
    rowGap: 24,
  },
  bottomSheetHeader: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: THEME.COLORS.GRAY_100,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: THEME.FONTS.BOLD,
    fontSize: 20,
    color: THEME.COLORS.GRAY_700,
  },
  filterTitle: {
    fontFamily: THEME.FONTS.BOLD,
    fontSize: 14,
    color: THEME.COLORS.GRAY_600,
  },

  trade: {},
  paymentsMethod: {},
  actions: {
    flex: 1,
    flexDirection: 'row',
    columnGap: 12,
    // justifyContent: 'flex-end',
  },
})
