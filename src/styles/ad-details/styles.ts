import { THEME } from '@theme/index'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GRAY_200,
  },
  header: {
    paddingHorizontal: 24,
    height: 50,
    justifyContent: 'center',
  },
})
