import { THEME } from '@theme/index'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GRAY_200,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: THEME.SPACES[6],
  },

  title: {
    fontFamily: THEME.FONTS.BOLD,
    color: THEME.COLORS.GRAY_700,
    fontSize: THEME.FONTS.SIZES.lg,
    flex: 1,
    textAlign: 'center',
    marginRight: THEME.SPACES[6],
  },

  sectionTitle: {
    fontFamily: THEME.FONTS.BOLD,
    color: THEME.COLORS.GRAY_700,
    fontSize: THEME.FONTS.SIZES.md,
  },

  sectionSubtitle: {
    fontFamily: THEME.FONTS.REGULAR,
    color: THEME.COLORS.GRAY_500,
    fontSize: THEME.FONTS.SIZES.sm,
    marginTop: THEME.SPACES[2],
  },

  content: {
    marginTop: THEME.SPACES[6],
    gap: THEME.SPACES[8],
  },

  imagesSection: {},
})
