import { View, Text, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Plus, Tag, ArrowRight } from 'phosphor-react-native'
import { styles } from '../../src/styles/home/ads.styles'
import { Button } from '@components/Button'
import { THEME } from '@theme/index'

export default function AdsScreen() {
  return (
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
    </SafeAreaView>
  )
}
