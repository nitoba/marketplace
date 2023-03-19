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
  welcomeTexts: {},

  title: {
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: 16,
  },
  username: {
    fontFamily: THEME.FONTS.BOLD,
    fontSize: 16,
  },
})
