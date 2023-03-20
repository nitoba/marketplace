import { THEME } from '@theme/index'
import { X } from 'phosphor-react-native'
import { useEffect, useState } from 'react'
import { Pressable, View, Text, PressableProps } from 'react-native'
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  ZoomIn,
} from 'react-native-reanimated'
import { styles } from './styles'

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

type Props = {
  onChange: (filters: string[]) => void
}

export function SelectConditions({ onChange }: Props) {
  const [conditions, setConditions] = useState<string[]>([])
  const selectedNewConditionFilter = conditions.includes('new')
  const selectedUsedConditionFilter = conditions.includes('used')

  function handleAddNewConditionFilter(newCondition: 'new' | 'used') {
    let newConditionFilter
    if (conditions.includes(newCondition)) {
      newConditionFilter = conditions.filter(
        (condition) => condition !== newCondition,
      )
    } else {
      newConditionFilter = [...conditions, newCondition]
    }

    setConditions(newConditionFilter)
    onChange(newConditionFilter)
  }

  return (
    <View style={styles.conditions}>
      <Text style={styles.title}>Condição</Text>

      <View style={styles.options}>
        <OptionPill
          title="Novo"
          onPress={() => handleAddNewConditionFilter('new')}
          isChecked={selectedNewConditionFilter}
        />
        <OptionPill
          title="Usado"
          onPress={() => handleAddNewConditionFilter('used')}
          isChecked={selectedUsedConditionFilter}
        />
      </View>
    </View>
  )
}

type OptionPillProps = {
  isChecked: boolean
  title: string
} & PressableProps

function OptionPill({ title, isChecked = false, ...props }: OptionPillProps) {
  const checked = useSharedValue(0)

  const checkedColorStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        checked.value,
        [0, 1],
        [THEME.COLORS.GRAY_300, THEME.COLORS.BLUE_LIGHT],
      ),
    }
  })

  const checkedTextColorStyles = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        checked.value,
        [0, 1],
        [THEME.COLORS.GRAY_500, THEME.COLORS.GRAY_100],
      ),
    }
  })

  useEffect(() => {
    checked.value = isChecked ? withTiming(1) : withTiming(0)
  }, [isChecked])

  return (
    <AnimatedPressable
      style={[styles.conditionFilter, checkedColorStyles]}
      {...props}
    >
      <Animated.Text
        style={[styles.conditionOptionFilterText, checkedTextColorStyles]}
      >
        {title}
      </Animated.Text>
      {isChecked && (
        <Animated.View style={styles.conditionFilterIcon} entering={ZoomIn}>
          <X size={8} color={THEME.COLORS.BLUE_LIGHT} />
        </Animated.View>
      )}
    </AnimatedPressable>
  )
}
