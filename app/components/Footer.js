import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'


export default class Footer extends Component {
  
  render() {
    const { children } = this.props

    return (
      <TouchableOpacity style={styles.footer}>
        <Text style={styles.footertext}>
          {children}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({

  footer: {
    padding: 15,
    backgroundColor: 'lightcoral',
  },

  footertext: {
    textAlign: 'center',
    color: 'white',
  },
})
