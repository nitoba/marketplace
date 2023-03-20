/* eslint-disable react/display-name */
import { Button } from '@components/Button'
import { CheckBox } from '@components/CheckBox'
import { Switch } from '@components/Switch'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { THEME } from '@theme/index'
import { X } from 'phosphor-react-native'
import { forwardRef, useMemo } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SelectConditions } from './SelectConditions'
import { styles } from './styles'

type Props = {
  onClose: () => void
}

export const FilterBottomSheet = forwardRef(({ onClose }: Props, ref: any) => {
  const snapPoints = useMemo(() => ['25%', '68%', '80%'], [])

  return (
    <BottomSheetModal
      ref={ref}
      index={1}
      snapPoints={snapPoints}
      handleStyle={styles.bottomSheetHeader}
      handleIndicatorStyle={{ backgroundColor: THEME.COLORS.GRAY_400 }}
      backgroundStyle={styles.bottomSheetHeader}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        style={{ flex: 1 }}
        disallowInterruption
      >
        <View style={styles.header}>
          <Text style={styles.title}>Filtrar anúncios</Text>
          <TouchableOpacity onPress={onClose}>
            <X size={24} />
          </TouchableOpacity>
        </View>
        <SelectConditions onChange={() => {}} />

        <View style={styles.trade}>
          <Text style={styles.filterTitle}>Aceita troca?</Text>
          <Switch isChecked={false} onChange={console.log} />
        </View>

        <View style={styles.paymentsMethod}>
          <Text style={styles.filterTitle}>Aceita troca</Text>
          <CheckBox title="Boleto" isChecked={false} onChange={console.log} />
          <CheckBox title="Pix" isChecked={false} onChange={console.log} />
          <CheckBox title="Dinheiro" isChecked={false} onChange={console.log} />
          <CheckBox
            title="Cartão de crédito"
            isChecked={false}
            onChange={console.log}
          />
          <CheckBox
            title="Depósito bancário"
            isChecked={false}
            onChange={console.log}
          />
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
      </ScrollView>
    </BottomSheetModal>
  )
})
