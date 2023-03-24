/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import { THEME } from '@theme/index'
import { Bank, Barcode, CreditCard, Money, QrCode } from 'phosphor-react-native'
import { View, Text, Image } from 'react-native'
import { PaymentMethods } from 'src/types/paymentMethods'
import { styles } from './styles'

type Props = {
  productContent: {
    seller: {
      name: string
      avatarUrl: string
    }
    price: number
    condition: 'new' | 'used'
    title: string
    description: string
    acceptsExchange: boolean
    paymentMethods: PaymentMethods[]
  }
}

const paymentMethods = {
  boleto: {
    title: 'Boleto',
    icon: <Barcode size={18} color={THEME.COLORS.GRAY_700} />,
  },
  pix: {
    title: 'Pix',
    icon: <QrCode size={18} color={THEME.COLORS.GRAY_700} />,
  },
  cash: {
    title: 'Dinheiro',
    icon: <Money size={18} color={THEME.COLORS.GRAY_700} />,
  },
  'credit-card': {
    title: 'Cartão de Credito',
    icon: <CreditCard size={18} color={THEME.COLORS.GRAY_700} />,
  },
  'debit-bank': {
    title: 'Depósito bancário',
    icon: <Bank size={18} color={THEME.COLORS.GRAY_700} />,
  },
}

export function Content({ productContent }: Props) {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.headerContent}>
        <Image
          source={{ uri: productContent.seller.avatarUrl }}
          style={styles.profileSeller}
        />
        <Text style={styles.sellerName}>{productContent.seller.name}</Text>
      </View>
      <View style={styles.conditionTag}>
        <Text style={styles.conditionText}>
          {productContent.condition === 'new' ? 'Novo' : 'Usado'}
        </Text>
      </View>
      <View style={styles.titleContent}>
        <Text style={styles.titleText}>{productContent.title}</Text>

        <Text style={styles.price}>
          <Text style={styles.currency}>R$</Text>
          {productContent.price
            .toLocaleString('pt-BR', {
              currency: 'BRL',
              style: 'currency',
            })
            .replace('R$', '')}
        </Text>
      </View>

      <Text style={styles.description}>
        Cras congue cursus in tortor sagittis placerat nunc, tellus arcu. Vitae
        ante leo eget maecenas urna mattis cursus. Mauris metus amet nibh mauris
        mauris accumsan, euismod. Aenean leo nunc, purus iaculis in aliquam.
      </Text>

      <View style={styles.acceptsExchange}>
        <Text style={styles.sectionTitle}>Aceita troca?</Text>
        <Text style={styles.sectionDescription}>
          {productContent.acceptsExchange ? 'Sim' : 'Não'}
        </Text>
      </View>

      <View style={styles.paymentMethods}>
        <Text style={styles.sectionTitle}>Meios de pagamento:</Text>

        {productContent.paymentMethods.map((method) => {
          return (
            <View style={styles.paymentMethodOption} key={method}>
              {paymentMethods[method].icon}
              <Text style={styles.sectionDescription}>
                {paymentMethods[method].title}
              </Text>
            </View>
          )
        })}
      </View>
    </View>
  )
}
