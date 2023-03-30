import { useRouter } from 'expo-router'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

type User = {
  id: string
  name: string
  email: string
}

type AuthContextProps = {
  children: ReactNode
}

type AuthContextData = {
  user: User | null
  signIn: () => Promise<void>
  signUp: () => Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const userLogged = { id: '1', name: 'Bruno', email: 'bruno@example.com' }

export function AuthProvider({ children }: AuthContextProps) {
  const [user, setUser] = useState<User | null>(userLogged)
  useProtectedRoute(user)

  async function signIn() {
    setUser({ id: '1', name: 'Bruno', email: 'bruno@example.com' })
  }
  async function signUp() {
    setUser({ id: '1', name: 'Bruno', email: 'bruno@example.com' })
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signUp }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}

function useProtectedRoute(user: User | null) {
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      // Redirect to the sign-in page.
      router.replace('/auth/sign-in')
    } else {
      // Redirect away from the sign-in page.
      router.replace('/home/ads')
      // router.replace('/ad-details/ads')
    }
  }, [user])
}
