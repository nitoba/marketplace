import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import { styles } from './styles'
import { Feather } from '@expo/vector-icons'
import { THEME } from '@theme/index'

export function SelectAdImages() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Imagens</Text>
      <Text style={styles.subtitle}>
        Escolha até 3 imagens para mostrar o quando o seu produto é incrível!
      </Text>

      <ScrollView
        style={styles.listImages}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: THEME.SPACES[2] }}
      >
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: 'https://github.com/nitoba.png' }}
            alt=""
          />
          <TouchableOpacity style={styles.removeButton}>
            <Feather name="x" size={THEME.SPACES[4]} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.placeholderButton}>
          <Feather
            name="plus"
            size={THEME.SPACES[6]}
            color={THEME.COLORS.GRAY_400}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
