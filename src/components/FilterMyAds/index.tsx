import { Feather } from '@expo/vector-icons'
import { THEME } from '@theme/index'
import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

const AnimatedFeather = Animated.createAnimatedComponent(Feather)

const filters = ['Todos', 'Ativos', 'Inativos'] as const
type Filters = (typeof filters)[number]

type Props = {
  onChange: (filter: Filters) => void
}

export function FilterMyAds({ onChange }: Props) {
  const [selectedFilter, setSelectedFilter] = useState<Filters>('Todos')

  const open = useSharedValue(0)

  const containerOptionsStyles = useAnimatedStyle(() => {
    return {
      opacity: open.value === 1 ? withTiming(1) : withTiming(0),
      height: open.value === 1 ? undefined : withTiming(0),
    }
  })

  const iconAnimationStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { rotateZ: `${interpolate(open.value, [0, 1], [0, 180])}deg` },
      ],
    }
  })

  function handleSelectFilter(filter: Filters) {
    setSelectedFilter(filter)
    handleToggleOpen()
    onChange(filter)
  }

  function handleToggleOpen() {
    open.value = open.value === 0 ? 1 : 0
  }

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.container} onPress={handleToggleOpen}>
        <Text style={styles.text}>{selectedFilter}</Text>

        <AnimatedFeather
          style={iconAnimationStyles}
          name={'chevron-down'}
          size={16}
          color={THEME.COLORS.GRAY_500}
        />
      </TouchableOpacity>

      <Animated.View style={[styles.openContainer, containerOptionsStyles]}>
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter}
            onPress={() => handleSelectFilter(filter)}
          >
            <Text
              style={[
                styles.text,
                {
                  fontFamily:
                    filter === selectedFilter
                      ? THEME.FONTS.BOLD
                      : THEME.FONTS.REGULAR,
                },
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </View>
  )
}
