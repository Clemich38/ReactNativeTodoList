import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'



export default class Checkbox extends Component {
  render() {
    return (
      <TouchableOpacity>
        <View style={styles.box}>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    height: 16,
    width: 16,
    borderWidth: 1,
    borderColor: 'lightslategrey',
  },
  inner: {
    flex: 1,
    margin: 2,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
})
