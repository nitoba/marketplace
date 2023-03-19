import { View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Plus } from 'phosphor-react-native'
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
          <View style={styles.welcomeTexts}>
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
    </SafeAreaView>
  )
}
