import { THEME } from '@theme/index'
import { ReactNode } from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { styles } from './styles'

type Props = {
  title: string
  variant?: 'primary' | 'secondary' | 'tertiary'
  full?: boolean
  leftIcon?: ReactNode
} & TouchableOpacityProps

export function Button({
  title,
  style,
  variant = 'primary',
  full = true,
  disabled,
  leftIcon,
  ...props
}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        styles[variant],
        disabled && styles.disabled,
        full && styles.full,
        style,
      ]}
      disabled={disabled}
      {...props}
    >
      {leftIcon}
      <Text
        style={[
          styles.text,
          {
            color:
              variant === 'tertiary'
                ? THEME.COLORS.GRAY_700
                : THEME.COLORS.GRAY_100,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}
