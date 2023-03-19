import { Button } from '@components/Button'
import { useRouter } from 'expo-router'
import React from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import Logo from '../../src/assets/logo.svg'

import { InputText } from '../../src/components/InputText'
import { styles } from '../../src/styles/auth/sign-in/styles'
import { useAuth } from '@contexts/auth'

const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type SignInFormData = z.infer<typeof signInFormSchema>

export default function SignInScreen() {
  const { signIn } = useAuth()
  const router = useRouter()

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
  })

  function handleNavigateToSignUp() {
    router.push('/auth/sign-up')
  }

  async function handleSignIn(data: SignInFormData) {
    signIn()
  }

  return (
    <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          <View>
            <View style={styles.formContainer}>
              <Logo />
              <Text style={styles.title}>Marketspace</Text>
              <Text style={styles.subtitle}>Seu espaço de compra e venda</Text>

              <View style={styles.form}>
                <Text style={styles.formTitle}>Acesse sua conta</Text>
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

                <Button
                  disabled={isSubmitting}
                  title="Entrar"
                  style={{ marginTop: 24 }}
                  onPress={handleSubmit(handleSignIn)}
                />
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.formTitle}>Ainda não tem acesso?</Text>
            <Button
              title="Criar uma conta"
              variant="tertiary"
              onPress={handleNavigateToSignUp}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}
