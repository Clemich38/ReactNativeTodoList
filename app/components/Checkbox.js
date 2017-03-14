import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'



export default class Checkbox extends Component {
  render() {
    const { checked } = this.props
    return (
      <TouchableOpacity>
        <View style={styles.box}>
          {checked && <View style={styles.inner} />}
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
    backgroundColor: 'lightslategrey',
  },
})
