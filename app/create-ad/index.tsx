import { Feather } from '@expo/vector-icons'
import { THEME } from '@theme/index'
import { useRouter } from 'expo-router'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../../src/styles/create-ad/styles'
import { SelectAdImages } from '@components/CreateAd/SelectAdImages'
import { AboutProductForm } from '@components/AboutProductForm'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { paymentMethodsArray } from '../../src/types/paymentMethods'
import { zodResolver } from '@hookform/resolvers/zod'
import { FooterActionsWithButtons } from '@components/FooterActionsWithButtons'

const createAdSchema = z.object({
  title: z
    .string({ required_error: 'Título obrigatório' })
    .nonempty('Título obrigatório'),
  description: z
    .string({ required_error: 'Descrição obrigatória' })
    .nonempty('Descrição obrigatória'),
  price: z.coerce
    .number({
      required_error: 'Preço é obrigatório',
      invalid_type_error: 'Preço é obrigatório',
    })
    .min(1, 'Valor mínimo de 1 real'),
  conditions: z.enum(['new', 'used'], {
    required_error: 'Condição do produto é obrigatória',
  }),
  acceptsExchange: z.boolean().default(false),
  paymentMethods: z
    .array(z.enum([...paymentMethodsArray]), {
      required_error: 'Escolha pelo menos um tipo de pagamento',
    })
    .nonempty('Escolha pelo menos um tipo de pagamento'),
})

export type CreateAdSchema = z.infer<typeof createAdSchema>

export default function CreateAd() {
  const { back } = useRouter()
  const methods = useForm<CreateAdSchema>({
    resolver: zodResolver(createAdSchema),
  })

  const { handleSubmit, reset } = methods

  function onSubmit(data: CreateAdSchema) {
    console.log(data)
  }

  function handleCancel() {
    reset()
    back()
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingHorizontal: THEME.SPACES[6],
        }}
        contentContainerStyle={{
          paddingBottom: THEME.SPACES[8] * 3,
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={styles.header}>
            <TouchableOpacity onPress={handleCancel}>
              <Feather
                name="arrow-left"
                color={THEME.COLORS.GRAY_700}
                size={24}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Criar anúncio</Text>
          </View>

          <View style={styles.content}>
            <FormProvider {...methods}>
              <SelectAdImages />
              <AboutProductForm />
            </FormProvider>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <FooterActionsWithButtons
        acceptAction={{
          label: 'Avançar',
          onPress: handleSubmit(onSubmit),
        }}
        rejectAction={{
          label: 'Cancelar',
          onPress: handleCancel,
        }}
      />
    </SafeAreaView>
  )
}
