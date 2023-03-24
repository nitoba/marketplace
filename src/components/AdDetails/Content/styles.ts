import { StyleSheet } from 'react-native'

import { THEME } from '@theme/index'

export const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 20,
    paddingHorizontal: 24,
    rowGap: 24,
  },
  headerContent: {
    flexDirection: 'row',
    columnGap: 8,
    alignItems: 'center',
  },
  profileSeller: {
    width: 28,
    height: 28,
    borderWidth: 2,
    borderColor: THEME.COLORS.BLUE,
    borderRadius: 14,
  },
  sellerName: {
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: 14,
    color: THEME.COLORS.GRAY_700,
  },

  conditionTag: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: THEME.COLORS.GRAY_300,
    borderRadius: 999,
    alignSelf: 'flex-start',
  },
  conditionText: {
    fontFamily: THEME.FONTS.BOLD,
    fontSize: 12,
    color: THEME.COLORS.GRAY_600,
  },

  titleContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    color: THEME.COLORS.GRAY_700,
    fontFamily: THEME.FONTS.BOLD,
    fontSize: 20,
  },
  price: {
    color: THEME.COLORS.BLUE_LIGHT,
    fontFamily: THEME.FONTS.BOLD,
    fontSize: 20,
  },
  currency: {
    fontSize: 14,
  },

  description: {
    color: THEME.COLORS.GRAY_600,
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: 14,
    marginTop: -18,
  },

  acceptsExchange: {
    flexDirection: 'row',
    columnGap: 8,
  },
  sectionTitle: {
    color: THEME.COLORS.GRAY_700,
    fontFamily: THEME.FONTS.BOLD,
    fontSize: 14,
  },
  sectionDescription: {
    color: THEME.COLORS.GRAY_700,
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: 14,
  },

  paymentMethods: {
    rowGap: 8,
  },
  paymentMethodOption: {
    flexDirection: 'row',
    columnGap: 8,
  },
})
