import { useEffect, useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Animated, {
  FadeIn,
  FadeOut,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated'
import { THEME } from '@theme/index'
import { styles } from './styles'

type Props = {
  title: string
  isChecked: boolean
  onCheckedChange: (value: boolean) => void
}

export function RadioButton({ title, isChecked, onCheckedChange }: Props) {
  const [checked, setChecked] = useState(isChecked)

  const checkedValue = useDerivedValue(() => {
    return checked ? withTiming(1) : withTiming(0)
  })

  const checkedAnimation = useAnimatedStyle(() => {
    return {
      borderColor: interpolateColor(
        checkedValue.value,
        [0, 1],
        [THEME.COLORS.GRAY_700, THEME.COLORS.BLUE_LIGHT],
      ),
    }
  })

  function handleCheckedChange() {
    onCheckedChange(!checked)
    setChecked((prev) => !prev)
  }

  useEffect(() => {
    setChecked(isChecked)
  }, [isChecked])

  return (
    <TouchableOpacity style={styles.container} onPress={handleCheckedChange}>
      <Animated.View style={[styles.containerRadio, checkedAnimation]}>
        {checked && (
          <Animated.View
            style={styles.checked}
            entering={FadeIn}
            exiting={FadeOut}
          />
        )}
      </Animated.View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}
