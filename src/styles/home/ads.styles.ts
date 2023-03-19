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
    justifyContent: 'space-between',
    marginTop: 24,
  },

  headerLeftSide: {
    flexDirection: 'row',
    columnGap: 8,
    alignItems: 'center',
  },

  profilePhoto: {
    width: 45,
    height: 45,
    borderRadius: 99999,
    borderColor: THEME.COLORS.BLUE_LIGHT,
    borderWidth: 3,
  },

  title: {
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: 16,
  },
  username: {
    fontFamily: THEME.FONTS.BOLD,
    fontSize: 16,
  },

  summaryAdsContainer: {
    marginTop: 40,
    rowGap: 16,
  },
  summaryAdsTitle: {
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: 14,
    color: THEME.COLORS.GRAY_600,
  },
  summaryAdsContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(100, 122, 199, 0.1)',
    borderRadius: 6,
    paddingLeft: 16,
    paddingVertical: 12,
  },
  summaryAdsTexts: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 16,
  },
  summaryAdsNumber: {
    fontFamily: THEME.FONTS.BOLD,
    fontSize: 20,
    color: THEME.COLORS.GRAY_600,
  },
  summaryAdsNumberSubtitle: {
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: 12,
    color: THEME.COLORS.GRAY_600,
  },
  goToMyAdsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
    padding: 16,
  },
  goToMyAdsButtonText: {
    fontFamily: THEME.FONTS.BOLD,
    fontSize: 12,
    color: THEME.COLORS.BLUE,
  },

  filterAndSearchAdsContainer: {
    rowGap: 16,
    marginTop: 40,
  },

  filterAndSearchAdsTitle: {
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: 14,
    color: THEME.COLORS.GRAY_600,
  },

  searchElements: {
    flexDirection: 'row',
    columnGap: 8,
    alignItems: 'center',
  },
})
