import { Feather } from '@expo/vector-icons'
import { THEME } from '@theme/index'
import { useRouter } from 'expo-router'
import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../../src/styles/create-ad/styles'

export default function CreateAd() {
  const { back } = useRouter()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={back}>
          <Feather name="arrow-left" color={THEME.COLORS.GRAY_700} size={24} />
        </TouchableOpacity>
        <Text style={styles.title}>Criar anúncio</Text>
      </View>
    </SafeAreaView>
  )
}
