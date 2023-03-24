/* eslint-disable jsx-a11y/alt-text */
import { Content } from '@components/AdDetails/Content'
import { Footer } from '@components/AdDetails/Footer'
import { Feather } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../../src/styles/ad-details/styles'

export default function AdDetails() {
  const router = useRouter()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={router.back}>
          <Feather name="arrow-left" size={24} />
        </TouchableOpacity>
      </View>
      <Content
        productContent={{
          title: 'Bicicleta',
          acceptsExchange: false,
          condition: `new`,
          description: 'lorem ipsum dolor sit amet, consectetur',
          seller: {
            name: 'Diego Fernandes',
            avatarUrl: 'https://github.com/diego3g.png',
          },
          price: 1200,
          paymentMethods: ['boleto', 'pix', 'cash'],
        }}
      />
      <Footer price={1200} />
    </SafeAreaView>
  )
}
