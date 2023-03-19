import {
  useFonts,
  Karla_400Regular,
  Karla_300Light,
  Karla_700Bold,
} from '@expo-google-fonts/karla'
import { ThemeProvider, useTheme } from '@react-navigation/native'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'
import { THEME } from '../src/theme'
export { ErrorBoundary } from 'expo-router'

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Karla_300Light,
    Karla_400Regular,
    Karla_700Bold,
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <Layout />}
    </>
  )
}

function Layout() {
  const theme = useTheme()
  theme.colors.background = THEME.COLORS.GRAY_100

  return (
    <ThemeProvider value={theme}>
      <Stack>
        <Stack.Screen name="auth/sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="auth/sign-up" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  )
}
