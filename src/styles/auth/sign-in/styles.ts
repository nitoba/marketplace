import { StyleSheet } from 'react-native'
import { THEME } from '../../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollViewContent: {
    paddingBottom: 32,
  },

  formContainer: {
    backgroundColor: THEME.COLORS.GRAY_200,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
    paddingHorizontal: 48,
  },

  title: {
    fontFamily: THEME.FONTS.BOLD,
    fontSize: 32,
    color: THEME.COLORS.GRAY_700,
  },
  subtitle: {
    fontFamily: THEME.FONTS.LIGHT,
    fontSize: 14,
  },

  form: {
    marginTop: 80,
    rowGap: 16,
    width: '100%',
  },

  formTitle: {
    fontFamily: THEME.FONTS.REGULAR,
    color: THEME.COLORS.GRAY_600,
    fontSize: 14,
    textAlign: 'center',
  },

  footer: {
    marginTop: 50,
    rowGap: 16,
    paddingHorizontal: 48,
  },
})
