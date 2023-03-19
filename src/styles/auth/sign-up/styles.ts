import { StyleSheet } from 'react-native'
import { THEME } from '../../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GRAY_200,
    paddingHorizontal: 48,
    justifyContent: 'center',
  },

  scrollViewContent: {
    paddingBottom: 32,
  },

  welcomeContainer: {
    alignItems: 'center',
    rowGap: 8,
    marginTop: 12,
  },

  title: {
    fontFamily: THEME.FONTS.BOLD,
    fontSize: 32,
    color: THEME.COLORS.GRAY_700,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: THEME.FONTS.LIGHT,
    fontSize: 14,
    textAlign: 'center',
  },

  formContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 16,
    marginTop: 24,
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
    marginTop: 40,
    rowGap: 16,
  },
})
