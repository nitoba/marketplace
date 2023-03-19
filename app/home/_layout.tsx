import { THEME } from '@theme/index'
import { Tabs } from 'expo-router'
import { House, Tag, User } from 'phosphor-react-native'

export default function HomeLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: THEME.COLORS.GRAY_400,
        tabBarActiveTintColor: THEME.COLORS.GRAY_600,
        tabBarStyle: {
          backgroundColor: THEME.COLORS.GRAY_100,
          height: 72,
        },
      }}
    >
      <Tabs.Screen
        name="ads"
        options={{
          tabBarIcon: ({ color, size }) => (
            <House color={color} size={size} weight="bold" />
          ),
        }}
      />
      <Tabs.Screen
        name="my-ads"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Tag color={color} size={size} weight="bold" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <User color={color} size={size} weight="bold" />
          ),
        }}
      />
    </Tabs>
  )
}
