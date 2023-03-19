import { THEME } from '@theme/index'
import { Eye, EyeClosed } from 'phosphor-react-native'
import { ReactNode, useState } from 'react'
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  Text,
} from 'react-native'

import { styles } from './styles'

type Props = {
  errorMessage?: string
  rightElement?: ReactNode
} & TextInputProps

export function InputText({
  secureTextEntry,
  errorMessage,
  rightElement,
  ...props
}: Props) {
  const [isFocused, setIsFocused] = useState(false)
  const [showPassword, setShowPassword] = useState(!secureTextEntry)

  const focusedColor = isFocused ? THEME.COLORS.GRAY_500 : 'transparent'

  function handleToggleShowPassword() {
    setShowPassword((prev) => !prev)
  }

  return (
    <View style={styles.container}>
      <View style={[styles.wrapper, { borderColor: focusedColor }]}>
        <TextInput
          style={styles.input}
          placeholderTextColor={THEME.COLORS.GRAY_400}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={!showPassword}
          {...props}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={handleToggleShowPassword}>
            {secureTextEntry && showPassword ? (
              <EyeClosed color={THEME.COLORS.GRAY_500} />
            ) : (
              <Eye color={THEME.COLORS.GRAY_500} />
            )}
          </TouchableOpacity>
        )}
        {rightElement}
      </View>
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  )
}
