import React, { Component, PropTypes } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import Checkbox from './Checkbox'


export default class List extends Component {

  renderItem = (text, i) => {

    return (
      <TouchableOpacity style={styles.item} key={i} >
        <Text style={styles.itemtext} >{i} - {text}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { list } = this.props
    return(
      <ScrollView>
        {list.map(this.renderItem)}
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({

  item: {
    padding: 10,
    marginTop: 1,
    marginBottom: 1,
    backgroundColor: '#eaf1f9',
  },

  itemtext: {
    color: 'lightslategrey',
  },
})



