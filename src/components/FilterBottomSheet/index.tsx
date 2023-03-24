/* eslint-disable react/display-name */
import { Button } from '@components/Button'
import { CheckBox } from '@components/CheckBox'
import { Switch } from '@components/Switch'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { zodResolver } from '@hookform/resolvers/zod'
import { THEME } from '@theme/index'
import { X } from 'phosphor-react-native'
import { forwardRef, useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { View, Text, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { paymentMethodsArray } from '../../../src/types/paymentMethods'
import { z } from 'zod'
import { SelectConditions } from './SelectConditions'
import { styles } from './styles'

const adsFilterSchema = z.object({
  conditions: z.array(z.enum(['new', 'used'])),
  acceptsExchange: z.boolean(),
  paymentMethods: z.array(z.enum([...paymentMethodsArray])),
})

type AdsFilterForm = z.infer<typeof adsFilterSchema>

type Props = {
  onClose: () => void
}

export const FilterBottomSheet = forwardRef(({ onClose }: Props, ref: any) => {
  const snapPoints = useMemo(() => ['25%', '68%', '80%'], [])

  const { control, handleSubmit, reset } = useForm<AdsFilterForm>({
    resolver: zodResolver(adsFilterSchema),
    defaultValues: {
      conditions: [],
      paymentMethods: [],
      acceptsExchange: false,
    },
  })

  function handleApplyFilters(data: AdsFilterForm) {
    console.log(data)
  }

  function handleResetFilters() {
    reset()
  }

  function handleClose() {
    handleResetFilters()
    onClose()
  }

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
          <TouchableOpacity onPress={handleClose}>
            <X size={24} />
          </TouchableOpacity>
        </View>

        <Controller
          control={control}
          name="conditions"
          render={({ field: { onChange, value } }) => (
            <SelectConditions onChange={onChange} conditions={value} />
          )}
        />

        <View style={styles.trade}>
          <Text style={styles.filterTitle}>Aceita troca?</Text>

          <Controller
            control={control}
            name="acceptsExchange"
            render={({ field: { onChange, value } }) => (
              <Switch isChecked={value} onChange={(check) => onChange(check)} />
            )}
          />
        </View>

        <View style={styles.paymentsMethod}>
          <Text style={styles.filterTitle}>Meios de pagamentos</Text>
          <Controller
            control={control}
            name="paymentMethods"
            render={({ field: { onChange, value } }) => (
              <CheckBox
                title="Boleto"
                isChecked={value.includes('boleto')}
                onChange={() => onChange([...value, 'boleto'])}
              />
            )}
          />

          <Controller
            control={control}
            name="paymentMethods"
            render={({ field: { onChange, value } }) => (
              <CheckBox
                title="Pix"
                isChecked={value.includes('pix')}
                onChange={() => onChange([...value, 'pix'])}
              />
            )}
          />

          <Controller
            control={control}
            name="paymentMethods"
            render={({ field: { onChange, value } }) => (
              <CheckBox
                title="Dinheiro"
                isChecked={value.includes('cash')}
                onChange={() => onChange([...value, 'cash'])}
              />
            )}
          />

          <Controller
            control={control}
            name="paymentMethods"
            render={({ field: { onChange, value } }) => (
              <CheckBox
                title="Cartão de crédito"
                isChecked={value.includes('credit-card')}
                onChange={() => onChange([...value, 'credit-card'])}
              />
            )}
          />

          <Controller
            control={control}
            name="paymentMethods"
            render={({ field: { onChange, value } }) => (
              <CheckBox
                title="Depósito bancário"
                isChecked={value.includes('debit-bank')}
                onChange={() => onChange([...value, 'debit-bank'])}
              />
            )}
          />
        </View>

        <View style={styles.actions}>
          <Button
            title="Resetar filtros"
            variant="tertiary"
            full={false}
            style={{ flex: 1 }}
            onPress={handleResetFilters}
          />
          <Button
            title="Aplicar filtros"
            variant="secondary"
            full={false}
            style={{ flex: 1 }}
            onPress={handleSubmit(handleApplyFilters)}
          />
        </View>
      </ScrollView>
    </BottomSheetModal>
  )
})
