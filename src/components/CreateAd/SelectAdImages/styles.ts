import { THEME } from '@theme/index'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    gap: THEME.SPACES[1],
  },
  title: {
    fontFamily: THEME.FONTS.BOLD,
    color: THEME.COLORS.GRAY_700,
    fontSize: THEME.FONTS.SIZES.md,
  },

  subtitle: {
    fontFamily: THEME.FONTS.REGULAR,
    color: THEME.COLORS.GRAY_500,
    fontSize: THEME.FONTS.SIZES.sm,
    marginTop: THEME.SPACES[2],
  },

  listImages: {
    marginTop: THEME.SPACES[2],
  },

  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: THEME.RADII.sm,
    backgroundColor: THEME.COLORS.GRAY_300,
    overflow: 'hidden',
    position: 'relative',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  removeButton: {
    borderRadius: THEME.RADII.full,
    width: THEME.SPACES[5],
    height: THEME.SPACES[5],
    backgroundColor: THEME.COLORS.GRAY_700,
    position: 'absolute',
    top: THEME.SPACES[2],
    right: THEME.SPACES[2],
    alignItems: 'center',
    justifyContent: 'center',
  },

  placeholderButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: THEME.RADII.sm,
    backgroundColor: THEME.COLORS.GRAY_300,
  },
})
