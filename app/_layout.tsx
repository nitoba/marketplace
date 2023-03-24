import { useEffect } from 'react'
import {
  useFonts,
  Karla_400Regular,
  Karla_300Light,
  Karla_700Bold,
} from '@expo-google-fonts/karla'
import { ThemeProvider, useTheme } from '@react-navigation/native'
import { SplashScreen, Stack } from 'expo-router'
import { AuthProvider } from '@contexts/auth'
import { THEME } from '../src/theme'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={theme}>
        <AuthProvider>
          <Stack screenOptions={{ headerShown: false }} />
        </AuthProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}
