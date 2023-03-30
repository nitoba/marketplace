import { Feather } from '@expo/vector-icons'
import { THEME } from '@theme/index'
import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

const filters = ['Todos', 'Ativos', 'Inativos'] as const
type Filters = (typeof filters)[number]

type Props = {
  onChange: (filter: Filters) => void
}

export function FilterMyAds({ onChange }: Props) {
  const [selectedFilter, setSelectedFilter] = useState<Filters>('Todos')
  const [isOpen, setIsOpen] = useState(false)

  function handleSelectFilter(filter: Filters) {
    setSelectedFilter(filter)
    setIsOpen(false)
    onChange(filter)
  }

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setIsOpen((prev) => !prev)}
      >
        <Text style={styles.text}>{selectedFilter}</Text>
        <Feather
          name={isOpen ? 'chevron-up' : 'chevron-down'}
          size={16}
          color={THEME.COLORS.GRAY_500}
        />
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.openContainer}>
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
        </View>
      )}
    </View>
  )
}
