import { View, Text, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default function AdDetails() {
  return (
    <View style={styles.container}>
      <Text>Add</Text>
    </View>
  )
}
