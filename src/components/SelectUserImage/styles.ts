import { THEME } from '@theme/index'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: THEME.COLORS.GRAY_300,
    borderWidth: 3,
    borderColor: THEME.COLORS.BLUE_LIGHT,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: THEME.COLORS.BLUE_LIGHT,
    width: 40,
    height: 40,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    height: '100%',
    width: '100%',
    borderRadius: 99999,
  },
})
