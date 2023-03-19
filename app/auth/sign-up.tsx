import { View, Text, ScrollView } from 'react-native'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'

import Logo from '../../src/assets/logo.svg'

import { SelectUserImage } from '@components/SelectUserImage'
import { Button } from '@components/Button'

import { InputText } from '../../src/components/InputText'
import { styles } from '../../src/styles/auth/sign-up/styles'

const signUpFormSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    password: z.string().min(6),
    confirmPassword: z.string(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (password !== confirmPassword) {
      return ctx.addIssue({
        message: "Passwords don't match",
        code: 'custom',
        path: ['confirmPassword'],
      })
    }
  })

type SignUpFormData = z.infer<typeof signUpFormSchema>

export default function SignUpScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
  })

  const router = useRouter()

  function handleGoBackToSignIn() {
    router.back()
  }

  async function handleSignUp(data: SignUpFormData) {}

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.welcomeContainer}>
          <Logo />
          <Text style={styles.title}>Boas vindas!</Text>
          <Text style={styles.subtitle}>
            Crie sua conta e use o espaço para comprar itens variados e vender
            seus produtos
          </Text>
        </View>
        <View style={styles.formContainer}>
          <SelectUserImage />
          <Controller
            control={control}
            name="name"
            render={({ field: { value, onChange } }) => (
              <InputText
                placeholder="Nome"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.name?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange } }) => (
              <InputText
                placeholder="E-mail"
                keyboardType="email-address"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.email?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="phone"
            render={({ field: { value, onChange } }) => (
              <InputText
                placeholder="Phone"
                keyboardType="number-pad"
                value={value}
                onChangeText={onChange}
                errorMessage={errors.phone?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { value, onChange } }) => (
              <InputText
                placeholder="Senha"
                secureTextEntry
                value={value}
                onChangeText={onChange}
                errorMessage={errors.password?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { value, onChange } }) => (
              <InputText
                placeholder="Confirmar senha"
                secureTextEntry
                value={value}
                onChangeText={onChange}
                errorMessage={errors.confirmPassword?.message}
              />
            )}
          />

          <Button
            title="Criar"
            variant="secondary"
            style={{ marginTop: 16 }}
            disabled={isSubmitting}
            onPress={handleSubmit(handleSignUp)}
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.formTitle}>Já tem uma conta?</Text>
          <Button
            title="Ir para o login"
            variant="tertiary"
            disabled={isSubmitting}
            onPress={handleGoBackToSignIn}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
