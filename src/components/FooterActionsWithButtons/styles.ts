import { THEME } from '@theme/index'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.GRAY_100,
    paddingHorizontal: THEME.SPACES[6],
    paddingVertical: THEME.SPACES[6],
    paddingBottom: THEME.SPACES[8],
    position: 'absolute',
    gap: THEME.SPACES[4],
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
})
