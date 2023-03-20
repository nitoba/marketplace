import { THEME } from '@theme/index'
import { Check } from 'phosphor-react-native'
import { ComponentProps, useEffect } from 'react'
import { Pressable, View, Text } from 'react-native'
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { styles } from './styles'

type CheckBoxProps = {
  title: string
  isChecked: boolean
  onChange: (value: boolean) => void
  style?: ComponentProps<typeof View>['style']
}

export function CheckBox({ title, isChecked, onChange, style }: CheckBoxProps) {
  const checked = useSharedValue(isChecked ? 1 : 0)

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        checked.value,
        [0, 1],
        ['transparent', THEME.COLORS.BLUE],
      ),
      borderColor: interpolateColor(
        checked.value,
        [0, 1],
        [THEME.COLORS.GRAY_600, THEME.COLORS.BLUE],
      ),
    }
  })

  function handleToggle() {
    checked.value = checked.value === 0 ? withTiming(1) : withTiming(0)
    onChange(checked.value === 0)
  }

  useEffect(() => {
    isChecked ? withTiming(1) : withTiming(0)
  }, [isChecked])

  return (
    <Pressable onPress={handleToggle} style={[styles.container, style]}>
      <Animated.View style={[styles.checkBox, animatedContainerStyle]}>
        <Animated.View>
          <Check size={18} color={THEME.COLORS.GRAY_100} />
        </Animated.View>
      </Animated.View>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}
