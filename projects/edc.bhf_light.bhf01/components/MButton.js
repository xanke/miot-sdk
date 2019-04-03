import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: 100,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 3,
    padding: 12
  },
  icon: {
    width: 30,
    height: 30,
    textAlign: 'center',
    backgroundColor: '#999999',
  },
  text: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 18
  }
})

export class MButton extends React.Component {
  constructor() {
    super()
    this.state = {
      title: 'dsf',
      status: 0,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.icon}></Text>
        <Text style={styles.text}>{this.props.name}</Text>
      </View>
    )
  }
}