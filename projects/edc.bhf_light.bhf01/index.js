import React from 'react'
import { API_LEVEL, Package, Device, Service, Host } from 'miot'
import { PackageEvent, DeviceEvent } from 'miot'
import { View, Text, Button, StyleSheet } from 'react-native'
import miotui from 'miot/ui'
import { MessageDialog } from 'miot/ui'
import { MButton } from './components/MButton'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      action: '3232',
      sendData: '',
      data: ''
    }
    this.fetchSet('set_light_switch', {params: [true]})
  }

  fetchSet(method, params) {
    params.id = 1
    this.fetchData(method, params)
  }

  fetchData(method, params) {
    // const params = { id: 1, method: 'props', params: { power_switch: true } }
    // this.setState({
    //   sendData: `${Date.now()}: ${JSON.stringify(params)}`
    // })
    this.state.sendData = `${Date.now()}: ${method} - ${JSON.stringify(params)}`
    // const method = 'power_switch'
    Device.getDeviceWifi()
      .callMethod(method, params)
      .then(res => {
        this.setState({
          data: `${Date.now()}: ${JSON.stringify(err)}`
        })
      })
      .catch(err => {
        this.setState({
          data: `${Date.now()}: ${JSON.stringify(err)}`
        })
      })
  }

  render() {
    return (
      <View>
        <miotui.TitleBar
          title="智能浴霸"
          onPressLeft={() => {
            navigation.goBack()
          }}
        />
        <Text>灯光控制</Text>
        <View style={styles.buttonContainer}>
          <MButton onPress={() => this.fetchSet('set_light_switch', {params: [true]})} name='灯光开' />
          <MButton onPress={() => this.fetchSet('set_light_switch', {params: [false]})} name='灯光关' />
        </View>
        <Text>电源控制</Text>
        <View style={styles.buttonContainer}>
          <MButton onPress={() => this.fetchSet('set_power_switch ', {params: [true]})} name='电源开' />
          <MButton onPress={() => this.fetchSet('set_power_switch ', {params: [false]})} name='电源关' />
        </View>
        <Text>风速控制</Text>
        <View style={styles.buttonContainer}>
          <MButton onPress={() => this.fetchSet('set_wind_speed ', {params: [0]})} name='关' />
          <MButton onPress={() => this.fetchSet('set_wind_speed ', {params: [1]})} name='风速1' />
          <MButton onPress={() => this.fetchSet('set_wind_speed ', {params: [2]})} name='风速2' />
          <MButton onPress={() => this.fetchSet('set_wind_speed ', {params: [3]})} name='风速3' />
        </View>
        <Text>工作模式</Text>
        <View style={styles.buttonContainer}>
          <MButton onPress={() => this.fetchSet('set_work_mode ', {params: [0]})} name='模式0' />
          <MButton onPress={() => this.fetchSet('set_work_mode ', {params: [1]})} name='模式1' />
          <MButton onPress={() => this.fetchSet('set_work_mode ', {params: [2]})} name='模式2' />
          <MButton onPress={() => this.fetchSet('set_work_mode ', {params: [3]})} name='模式3' />
        </View>
        <Text>{this.state.sendData}</Text>
        <Text>{this.state.data}</Text>
      </View>
    )
  }
}
Package.entry(App, () => {})

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
  }
})