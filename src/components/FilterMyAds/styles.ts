import { THEME } from '@theme/index'
import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
  wrapper: {
    width: 110,
  },

  container: {
    // position: 'relative',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: THEME.COLORS.GRAY_300,
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    zIndex: 999,
    width: '100%',
  },

  openContainer: {
    position: 'absolute',
    top: 38,
    width: '100%',
    zIndex: 999,
    backgroundColor: THEME.COLORS.GRAY_100,
    padding: 12,
    rowGap: 12,
    borderRadius: 6,
    elevation: 2,
    // shadowColor: 'rgba(0, 0, 0, 0.1)',
    // shadowOffset: {
    //   height: 2,
    //   width: 8,
    // },
  },

  text: {
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: 14,
    color: THEME.COLORS.GRAY_600,
  },
})
