import { Button } from '@components/Button'
import { THEME } from '@theme/index'
import { WhatsappLogo } from 'phosphor-react-native'
import { Text, View } from 'react-native'
import { styles } from './styles'

type Props = {
  price: number
}

export function Footer({ price }: Props) {
  function handleContact() {
    // TODO: open whats app here with number of seller
  }
  return (
    <View style={styles.container}>
      <Text style={styles.price}>
        <Text style={styles.currency}>R$</Text>
        {price
          .toLocaleString('pt-BR', {
            currency: 'BRL',
            style: 'currency',
          })
          .replace('R$', '')}
      </Text>

      <Button
        title="Entrar em contato"
        full={false}
        leftIcon={<WhatsappLogo size={22} color={THEME.COLORS.GRAY_100} />}
        onPress={handleContact}
      />
    </View>
  )
}
