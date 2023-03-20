/* eslint-disable react/display-name */
import { Button } from '@components/Button'
import { CheckBox } from '@components/CheckBox'
import { Switch } from '@components/Switch'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { THEME } from '@theme/index'
import { X } from 'phosphor-react-native'
import { forwardRef, useMemo } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { SelectConditions } from './SelectConditions'
import { styles } from './styles'

type Props = {
  onClose: () => void
}

export const FilterBottomSheet = forwardRef(({ onClose }: Props, ref: any) => {
  const snapPoints = useMemo(() => ['25%', '50%'], [])

  return (
    <BottomSheetModal
      ref={ref}
      index={1}
      snapPoints={snapPoints}
      handleStyle={styles.bottomSheetHeader}
      handleIndicatorStyle={{ backgroundColor: THEME.COLORS.GRAY_400 }}
      backgroundStyle={styles.bottomSheetHeader}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Filtrar anúncios</Text>
          <TouchableOpacity onPress={onClose}>
            <X size={24} />
          </TouchableOpacity>
        </View>
        <SelectConditions onChange={() => {}} />

        <View style={styles.trade}>
          <Text style={styles.filterTitle}>Aceita troca?</Text>
          <Switch />
        </View>

        <View style={styles.paymentsMethod}>
          <Text style={styles.filterTitle}>Aceita troca</Text>
          <CheckBox />
          <CheckBox />
          <CheckBox />
          <CheckBox />
        </View>

        <View style={styles.actions}>
          <Button
            title="Resetar filtros"
            variant="tertiary"
            full={false}
            style={{ flex: 1 }}
          />
          <Button
            title="Aplicar filtros"
            variant="secondary"
            full={false}
            style={{ flex: 1 }}
          />
        </View>
      </View>
    </BottomSheetModal>
  )
})
