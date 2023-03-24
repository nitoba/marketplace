/* eslint-disable jsx-a11y/alt-text */
import { CarouselImages } from '@components/AdDetails/CarouselImages'
import { Content } from '@components/AdDetails/Content'
import { Footer } from '@components/AdDetails/Footer'
import { Feather } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { View, TouchableOpacity, ScrollView } from 'react-native'
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
      <ScrollView>
        <CarouselImages
          imagesUrl={[
            'https://www.dhsbikeparts.ro/domains/dhsbikeparts.ro/files/ftp/25053-20045-bicicleta-mtb-afisport-m2-29-inch-xl-32166.jpg',
            'https://www.carnivalbikes.cl/sitio-web/wp-content/uploads/2019/10/35535.jpg',
            'https://http2.mlstatic.com/D_NQ_NP_847883-MLB28770376634_112018-F.jpg',
            'https://d2figssdufzycg.cloudfront.net/Custom/Content/Products/13/28/13289952_bicicleta-aro-24-18-marchas-vermelho-ultra-bikes-239653_z2_636554341099379896.jpg',
            'https://http2.mlstatic.com/bicicleta-urbana-para-dama-con-canasta-r26-D_NQ_NP_751103-MLM28255872007_092018-F.jpg',
          ]}
        />
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
      </ScrollView>

      <Footer price={1200} />
    </SafeAreaView>
  )
}
