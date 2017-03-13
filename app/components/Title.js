import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Title extends Component {

  render() {
    return (
      <Text style={styles.title}>
        Super Title
      </Text>
      )
  }
}

const styles = StyleSheet.create({

  title: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'lightsteelblue',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
})