import React from 'react'

import { Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    alignItems: 'stretch',
  },
  detailColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  linkColumn: {
    flexDirection: 'column',
    flexGrow: 2,
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
  name: {
    fontSize: 14,
    fontFamily: 'Lato Bold',
  },
  subtitle: {
    fontSize: 12,
    justifySelf: 'flex-end',
    fontFamily: 'Lato',
  },
})

export default ({ title, team, reviewer, editDate }) => (
  <View style={styles.container}>
    <View style={styles.detailColumn}>
      <Text style={styles.name}>{title}</Text>
      <Text style={styles.subtitle}>{team}</Text>
      <Text style={styles.subtitle}>{reviewer}</Text>
    </View>
    <View style={styles.linkColumn}>
      <Text style={styles.subtitle}>{editDate}</Text>
    </View>
  </View>
)
