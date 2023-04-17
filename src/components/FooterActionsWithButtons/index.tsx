import { View } from 'react-native'
import { styles } from './styles'
import { Button } from '@components/Button'
import { ComponentProps } from 'react'

type Props = {
  acceptAction: {
    label: string
    onPress: () => void
    variant?: ComponentProps<typeof Button>['variant']
  }
  rejectAction: {
    label: string
    onPress: () => void
    variant?: ComponentProps<typeof Button>['variant']
  }
}

export function FooterActionsWithButtons({
  acceptAction,
  rejectAction,
}: Props) {
  return (
    <View style={styles.container}>
      <Button
        title={rejectAction.label}
        variant={rejectAction.variant ?? 'tertiary'}
        onPress={rejectAction.onPress}
        style={{ flex: 1 }}
      />
      <Button
        title={acceptAction.label}
        variant={acceptAction.variant ?? 'secondary'}
        onPress={acceptAction.onPress}
        style={{ flex: 1 }}
      />
    </View>
  )
}
