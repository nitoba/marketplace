import { THEME } from '@theme/index'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  conditions: {
    rowGap: 12,
  },
  title: {
    fontFamily: THEME.FONTS.BOLD,
    fontSize: 14,
    color: THEME.COLORS.GRAY_600,
  },

  options: {
    flexDirection: 'row',
    columnGap: 8,
  },

  conditionFilter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 6,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: THEME.COLORS.GRAY_300,

    borderRadius: 9999,
    alignSelf: 'flex-start',
  },

  conditionFilterSelected: {
    backgroundColor: THEME.COLORS.BLUE_LIGHT,
  },

  conditionOptionFilterTextSelected: {
    color: 'white',
  },

  conditionOptionFilterText: {
    fontFamily: THEME.FONTS.BOLD,
    color: THEME.COLORS.GRAY_500,
    fontSize: 12,
  },

  conditionFilterIcon: {
    backgroundColor: 'white',
    borderRadius: 99999,
    color: THEME.COLORS.BLUE_LIGHT,
    padding: 2,
  },
})
