import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  container: {
    marginBottom: 3,
    flexDirection: 'row',
  },
  labelColumn: {
    flexDirection: 'column',
    // flexGrow: 2,
  },
  valueColumn: {
    flexDirection: 'column',
    // flexGrow: 2,
    alignSelf: 'flex-start',
    // justifySelf: 'flex-end',
  },
  label: {
    fontFamily: 'Lato Bold',
    fontSize: 10,
  },
  value: {
    fontFamily: 'Lato',
    fontSize: 10,
  },
  arabicValue: {
    fontFamily: 'Amiri',
    fontSize: 10,
  },
})

export default ({ label, value, arabicValue, formtedValue }) => (
  <View style={styles.container}>
    <View style={styles.labelColumn}>
      <Text style={styles.label}>{label}</Text>
    </View>
    <View style={styles.valueColumn}>
      <Text style={styles.value}>{value}</Text>
    </View>
    <View style={styles.valueColumn}>
      <Text style={styles.arabicValue}>{arabicValue}</Text>
    </View>
  </View>
)
