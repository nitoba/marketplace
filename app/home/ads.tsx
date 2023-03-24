import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  Plus,
  Tag,
  ArrowRight,
  MagnifyingGlass,
  Sliders,
} from 'phosphor-react-native'
import { styles } from '../../src/styles/home/ads.styles'
import { Button } from '@components/Button'
import { THEME } from '@theme/index'
import { InputText } from '@components/InputText'
import { CardProduct } from '@components/CardProduct'
import { useEffect, useRef, useState } from 'react'
import { api } from '../../src/lib/axios'
import { ProductAd } from '../../src/types/productAd'
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'
import { FilterBottomSheet } from '@components/FilterBottomSheet'
import { useRouter } from 'expo-router'

export default function AdsScreen() {
  const [productsAds, setProductsAds] = useState<ProductAd[]>([])
  const bottomSheetRef = useRef<BottomSheetModal>(null)

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

  function handleOpenProductAdFilter() {
    bottomSheetRef.current?.present()
  }

  function handleCloseProductAdFilter() {
    bottomSheetRef.current?.close()
  }

  function handleNavigateToProductDetails(id: string) {
    router.push(`/ad-details/${id}`)
  }

  return (
    <BottomSheetModalProvider>
      <FilterBottomSheet
        ref={bottomSheetRef}
        onClose={handleCloseProductAdFilter}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerLeftSide}>
              <Image
                style={styles.profilePhoto}
                source={{ uri: 'https://github.com/nitoba.png' }}
                alt=""
              />
              <View>
                <Text style={styles.title}>Boas vindas,</Text>
                <Text style={styles.username}>Bruno</Text>
              </View>
            </View>

            <Button
              title="Criar anúncio"
              variant="secondary"
              full={false}
              leftIcon={<Plus color={THEME.COLORS.GRAY_100} size={16} />}
            />
          </View>

          <View style={styles.summaryAdsContainer}>
            <Text style={styles.summaryAdsTitle}>
              Seus produtos anunciados para venda
            </Text>
            <View style={styles.summaryAdsContent}>
              <View style={styles.summaryAdsTexts}>
                <Tag color={THEME.COLORS.BLUE} size={22} />
                <View>
                  <Text style={styles.summaryAdsNumber}>4</Text>
                  <Text style={styles.summaryAdsNumberSubtitle}>
                    anúncios ativos
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={styles.goToMyAdsButton}>
                <Text style={styles.goToMyAdsButtonText}>Meus anúncios</Text>
                <ArrowRight color={THEME.COLORS.BLUE} size={16} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.filterAndSearchAdsContainer}>
            <Text style={styles.filterAndSearchAdsTitle}>
              Compre produtos variados
            </Text>
            <InputText
              placeholder="Buscar anúncio"
              rightElement={
                <View style={styles.searchElements}>
                  <MagnifyingGlass size={20} weight="bold" />
                  <View
                    style={{
                      height: 25,
                      width: 1,
                      backgroundColor: THEME.COLORS.GRAY_300,
                    }}
                  />
                  <TouchableOpacity onPress={handleOpenProductAdFilter}>
                    <Sliders size={20} weight="bold" />
                  </TouchableOpacity>
                </View>
              }
            />
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
                <Text style={styles.emptyText}>
                  Não há nenhum anúncio postado{' '}
                </Text>
              </View>
            )}
          />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </BottomSheetModalProvider>
  )
}
