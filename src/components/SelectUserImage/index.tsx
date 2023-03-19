import { Image, TouchableOpacity, View } from 'react-native'
import { Pencil, User } from 'phosphor-react-native'
import { THEME } from '@theme/index'
import { useSelectImage } from '@hooks/useSelectImage'
import { styles } from './styles'

export function SelectUserImage() {
  const { imageUri, pickImage } = useSelectImage()
  return (
    <TouchableOpacity style={styles.container} onPress={pickImage}>
      {imageUri ? (
        <Image
          style={styles.image}
          source={{ uri: imageUri }}
          alt=""
          resizeMode="cover"
        />
      ) : (
        <User size={38} weight="bold" color={THEME.COLORS.GRAY_400} />
      )}

      <View style={styles.editIcon}>
        <Pencil color={THEME.COLORS.GRAY_200} />
      </View>
    </TouchableOpacity>
  )
}
