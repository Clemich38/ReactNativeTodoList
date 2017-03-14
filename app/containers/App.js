import React, { Component, PropTypes } from 'react'
import { View, ScrollView, StyleSheet, TextInput, Text } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Title from '../components/Title'
import Footer from '../components/Footer'
import List from '../components/List'
import Input from '../components/Input'

import { actionCreators } from '../redux/todoRedux'

const mapStateToProps = (state) => ({
  items: state.items,
})

class App extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  onAddItem = (text) => {
    const { dispatch } = this.props
    dispatch(actionCreators.addItem(text));
  }

  onToggleItemCompleted = (index) => {
    const { dispatch } = this.props
    dispatch(actionCreators.toggleItemCompleted(index));
  }

  render() {
    const { items } = this.props
    return (
      <View style={styles.container}>
        <Title>
          Super Titre
        </Title>
        <Input placeholder='New Item...'
               onSubmitEditing={this.onAddItem}
          >
        </Input>

        <List list={items}
              onToggle={this.onToggleItemCompleted}>

        </List>  
        <Footer>
          Remove completed items
        </Footer>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default connect(mapStateToProps)(App)
