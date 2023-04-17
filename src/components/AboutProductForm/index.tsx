import { InputText } from '@components/InputText'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { RadioButton } from '@components/RadioButton'
import { Switch } from '@components/Switch'
import { Controller, useFormContext } from 'react-hook-form'
import { CheckBox } from '@components/CheckBox'
import { CreateAdSchema } from 'app/create-ad'
import { useState } from 'react'

export function AboutProductForm() {
  const {
    control,
    formState: { errors },
  } = useFormContext<CreateAdSchema>()

  function handleChangePaymentMethod(
    method: CreateAdSchema['paymentMethods'][number],
    currentValues: CreateAdSchema['paymentMethods'] | undefined,
  ) {
    if (currentValues) return [...currentValues, method]
    return [method]
  }

  return (
    <View style={styles.container}>
      <View style={styles.sectionWrapper}>
        <Text style={styles.title}>Sobre o produto</Text>
        <Controller
          control={control}
          name="title"
          render={({ field: { value, onChange } }) => (
            <InputText
              placeholder="Título do anúncio"
              onChangeText={(text) => onChange(text)}
              value={value}
              errorMessage={errors.title?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="description"
          render={({ field: { value, onChange } }) => (
            <InputText
              placeholder="Descrição do produto"
              multiline
              onChangeText={(text) => onChange(text)}
              value={value}
              errorMessage={errors.description?.message}
              style={{
                height: 160,
              }}
            />
          )}
        />

        <View style={styles.condition}>
          <Controller
            control={control}
            name="conditions"
            render={({ field: { onChange, value } }) => (
              <SelectConditions onChange={onChange} condition={value} />
            )}
          />
        </View>
        <Text style={styles.errorMessage}>{errors.conditions?.message}</Text>

        <View style={[styles.sectionWrapper, { marginTop: 16 }]}>
          <Text style={styles.title}>Venda</Text>

          <Controller
            control={control}
            name="price"
            render={({ field: { value, onChange } }) => (
              <InputText
                onChangeText={(text) => onChange(text ?? 0)}
                value={value ? String(value) : ''}
                placeholder="Valor do produto"
                keyboardType="number-pad"
                errorMessage={errors.price?.message}
              />
            )}
          />
        </View>

        <View style={[styles.sectionWrapper, { marginTop: 16 }]}>
          <Text style={styles.title}>Aceita troca?</Text>
          <Controller
            control={control}
            name="acceptsExchange"
            render={({ field: { onChange, value } }) => (
              <Switch isChecked={value} onChange={(check) => onChange(check)} />
            )}
          />
        </View>

        <View style={styles.sectionWrapper}>
          <Text style={styles.title}>Meios de pagamentos aceitos</Text>
          <Controller
            control={control}
            name="paymentMethods"
            render={({ field: { onChange, value } }) => (
              <CheckBox
                title="Boleto"
                isChecked={value?.includes('boleto')}
                onChange={() =>
                  onChange(handleChangePaymentMethod('boleto', value))
                }
              />
            )}
          />

          <Controller
            control={control}
            name="paymentMethods"
            render={({ field: { onChange, value } }) => (
              <CheckBox
                title="Pix"
                isChecked={value?.includes('pix')}
                onChange={() =>
                  onChange(handleChangePaymentMethod('pix', value))
                }
              />
            )}
          />

          <Controller
            control={control}
            name="paymentMethods"
            render={({ field: { onChange, value } }) => (
              <CheckBox
                title="Dinheiro"
                isChecked={value?.includes('cash')}
                onChange={() =>
                  onChange(handleChangePaymentMethod('cash', value))
                }
              />
            )}
          />

          <Controller
            control={control}
            name="paymentMethods"
            render={({ field: { onChange, value } }) => (
              <CheckBox
                title="Cartão de crédito"
                isChecked={value?.includes('credit-card')}
                onChange={() =>
                  onChange(handleChangePaymentMethod('credit-card', value))
                }
              />
            )}
          />

          <Controller
            control={control}
            name="paymentMethods"
            render={({ field: { onChange, value } }) => (
              <CheckBox
                title="Depósito bancário"
                isChecked={value?.includes('debit-bank')}
                onChange={() =>
                  onChange(handleChangePaymentMethod('debit-bank', value))
                }
              />
            )}
          />

          <Text style={styles.errorMessage}>
            {errors.paymentMethods?.message}
          </Text>
        </View>
      </View>
    </View>
  )
}

const conditions = [
  {
    title: 'Produto novo',
    value: 'new',
  },
  {
    title: 'Produto usado',
    value: 'used',
  },
] as const

type SelectConditionsProps = {
  condition: 'new' | 'used'
  onChange: (condition: 'new' | 'used') => void
}

function SelectConditions({ onChange, condition }: SelectConditionsProps) {
  const [currentCondition, setCondition] = useState<'new' | 'used'>(condition)

  function handleChange(newCondition: 'new' | 'used') {
    onChange(newCondition)
    setCondition(newCondition)
  }
  return (
    <View style={styles.condition}>
      {conditions.map((condition) => {
        return (
          <RadioButton
            key={condition.value}
            title={condition.title}
            isChecked={condition.value === currentCondition}
            onCheckedChange={() => handleChange(condition.value)}
          />
        )
      })}
    </View>
  )
}
