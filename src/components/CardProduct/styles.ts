import { THEME } from '@theme/index'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    rowGap: 4,
    flex: 1,
  },

  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    paddingTop: 4,
    paddingHorizontal: 4,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productImage: {
    position: 'relative',
    height: 100,
    borderRadius: 6,
  },
  userImage: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: THEME.COLORS.GRAY_100,
  },
  tagContainer: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 9999,
  },
  tagText: {
    fontFamily: THEME.FONTS.BOLD,
    fontSize: 10,
    color: THEME.COLORS.GRAY_100,
  },

  detailsContainer: {
    width: '100%',
  },

  productName: {
    fontSize: 14,
    fontFamily: THEME.FONTS.REGULAR,
    color: THEME.COLORS.GRAY_600,
  },
  productPrice: {
    fontSize: 16,
    fontFamily: THEME.FONTS.BOLD,
    color: THEME.COLORS.GRAY_700,
  },

  used: {
    backgroundColor: THEME.COLORS.GRAY_600,
  },

  new: {
    backgroundColor: THEME.COLORS.BLUE,
  },
})
