import { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { api } from '../../src/lib/axios'
import { ProductAd } from '../../src/types/productAd'
import { styles } from '../../src/styles/home/my-ads.styles'
import { CardProduct } from '@components/CardProduct'
import { useRouter } from 'expo-router'
import { Feather } from '@expo/vector-icons'
import { THEME } from '@theme/index'
import { FilterMyAds } from '@components/FilterMyAds'

export default function MyAdsScreen() {
  const [productsAds, setProductsAds] = useState<ProductAd[]>([])

  const router = useRouter()

  useEffect(() => {
    api.get('/products').then(({ data }) => {
      const productsAds = data.products.map((product: any, index: number) => {
        return {
          id: product.id,
          title: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
          condition: index % 2 === 0 ? 'new' : 'used',
          ownerAvatarUrl: 'https://github.com/nitoba.png',
        }
      })

      setProductsAds(productsAds)
    })
  }, [])

  function handleNavigateToProductDetails(id: string) {
    router.push(`/ad-details/${id}`)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meus anúncios</Text>
        <TouchableOpacity>
          <Feather name="plus" color={THEME.COLORS.GRAY_700} size={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.filter}>
        <Text style={styles.numberOfAdsText}>9 anúncios</Text>
        <FilterMyAds onChange={() => {}} />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.listProducts}
        contentContainerStyle={styles.contentList}
        data={productsAds}
        keyExtractor={({ id }) => id}
        numColumns={2}
        renderItem={({ item, index }) => (
          <View
            style={[
              { flex: 1 },
              index % 2 === 0 ? { marginRight: 10 } : { marginLeft: 10 },
            ]}
          >
            <CardProduct
              product={item}
              onPressCard={() => handleNavigateToProductDetails(item.id)}
            />
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyList}>
            <Text style={styles.emptyText}>Não há nenhum anúncio postado </Text>
          </View>
        )}
      />
    </SafeAreaView>
  )
}
