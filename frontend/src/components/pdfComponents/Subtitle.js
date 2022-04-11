import React from 'react'
import { Text, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 14,
    marginBottom: 10,
    marginTop: 10,
  },
})

const Subtitle = ({ children }) => <Text style={styles.title}>{children}</Text>

export default Subtitle
