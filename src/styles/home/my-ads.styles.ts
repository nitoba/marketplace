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

  filter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
  },

  numberOfAdsText: {
    fontFamily: THEME.FONTS.REGULAR,
    color: THEME.COLORS.GRAY_600,
    fontSize: 14,
  },

  title: {
    fontFamily: THEME.FONTS.BOLD,
    color: THEME.COLORS.GRAY_700,
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
  },

  listProducts: {
    flex: 1,
    marginTop: 24,
    zIndex: -1,
  },

  contentList: {
    paddingBottom: 24,
    gap: 24,
  },

  emptyList: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontFamily: THEME.FONTS.BOLD,
    fontSize: 18,
  },
})
