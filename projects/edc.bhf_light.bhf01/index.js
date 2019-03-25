import React from 'react'
import { API_LEVEL, Package, Device, Service, Host } from 'miot'
import { PackageEvent, DeviceEvent } from 'miot'
import { View, Text, Button } from 'react-native'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      action: '323',
      data: ''
    }
    this.getData()
  }

  getData() {
    const params = {"id":1,"method":"props","params":{"power_switch":true}}

    const method = 'power_switch'
    Device.getDeviceWifi().callMethod(method, params)
      .then(res => {
        this.setState({
          data: res
        })
      })
      .catch(err => {
        this.setState({
          data: err
        })
      })
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>智能浴霸</Text>
        <Button onPress={() => this.getData()} title="灯光" />
        <Button onPress={() => this.getData()} title="风扇" />
        <Text>{JSON.stringify(this.state.data)}</Text>
      </View>
    )
  }
}
Package.entry(App, () => {})
