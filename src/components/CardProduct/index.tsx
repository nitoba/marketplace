import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageBackground,
} from 'react-native'
import { ProductAd } from '../../types/productAd'
import { styles } from './styles'

type Props = {
  product: ProductAd
  onPressCard: () => void
}

export function CardProduct({
  product: { title, thumbnail, price, condition, ownerAvatarUrl },
  onPressCard,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.1}
      onPress={onPressCard}
    >
      <ImageBackground
        resizeMode="cover"
        imageStyle={styles.productImage}
        source={{
          uri: thumbnail,
        }}
      >
        <View style={styles.header}>
          <Image
            resizeMode="cover"
            style={styles.userImage}
            source={{ uri: ownerAvatarUrl }}
            alt=""
          />
          <View style={[styles.tagContainer, styles[condition]]}>
            <Text style={styles.tagText}>
              {condition === 'new' && 'NOVO'}
              {condition === 'used' && 'USADO'}
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{title}</Text>
        <Text style={styles.productPrice}>R$ {price}</Text>
      </View>
    </TouchableOpacity>
  )
}
