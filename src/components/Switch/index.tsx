import { THEME } from '@theme/index'
import { ComponentProps, useEffect } from 'react'
import { Pressable, View } from 'react-native'
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { styles } from './styles'

type SwitchProps = {
  isChecked: boolean
  onChange: (value: boolean) => void
  style?: ComponentProps<typeof View>['style']
}

export function Switch({ isChecked, onChange, style }: SwitchProps) {
  const checked = useSharedValue(isChecked ? 1 : 0)

  const animatedTrackStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        checked.value,
        [0, 1],
        [THEME.COLORS.GRAY_300, THEME.COLORS.BLUE_LIGHT],
      ),
    }
  })

  const animatedThumbStyle = useAnimatedStyle(() => {
    return {
      left: interpolate(checked.value, [0, 1], [2, 24]),
    }
  })

  function handleToggleSwitch() {
    checked.value = checked.value === 0 ? withTiming(1) : withTiming(0)
    onChange(checked.value === 0)
  }

  useEffect(() => {
    isChecked ? withTiming(1) : withTiming(0)
  }, [isChecked])

  return (
    <Pressable onPress={handleToggleSwitch} style={style}>
      <Animated.View style={[styles.track, animatedTrackStyle]}>
        <Animated.View style={[styles.thumb, animatedThumbStyle]} />
      </Animated.View>
    </Pressable>
  )
}
