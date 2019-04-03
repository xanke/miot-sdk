import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: 100,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 3,
    marginLeft: 4,
    padding: 12
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  text: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 13
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
    const { icon = 'light' } = this.props
    let iconImg
    if (icon === 'light' ) iconImg = require('../assets/icon/light.png')
    if (icon === 'power' ) iconImg = require('../assets/icon/power.png')
    if (icon === 'fan' ) iconImg = require('../assets/icon/fan.png')
    return (
      <View style={styles.container}>
        <Image style={styles.icon} source={iconImg}></Image>
        <Text style={styles.text}>{this.props.name}</Text>
      </View>
    )
  }
}