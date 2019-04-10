import React from 'react'
import { API_LEVEL, Package, Device, Service, Host } from 'miot'
import { PackageEvent, DeviceEvent } from 'miot'
import { View, Text, Button, StyleSheet } from 'react-native'
import miotui from 'miot/ui'
import { MessageDialog } from 'miot/ui'
import { MButton } from './components/MButton'
import {
  RkButton,
  RkText,
  RkCard,
  RkSwitch,
  RkTheme,
} from 'react-native-ui-kitten';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      action: '',
      sendData: '',
      data: '',
      value: false
    }
    this.fetchSet('set_light_switch', {params: [true]})
  }

  fetchSet(method, params) {
    params.id = 1
    this.fetchData(method, params)
  }

  onSwitchValueChange = (value) => {
    this.setState({value: value});
  };

  fetchData(method, params) {
    this.state.sendData = `> ${Date.now()}: ${method} - ${JSON.stringify(params)}`
    Device.getDeviceWifi()
      .callMethod(method, params)
      .then(res => {
        this.setState({
          data: `< ${Date.now()}: ${JSON.stringify(res)}`
        })
      })
      .catch(err => {
        this.setState({
          data: `< ${Date.now()}: ${JSON.stringify(err)}`
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
        <RkButton onPress={() => this.fetchSet('set_light_switch', {params: {light_switch: true}})} rkType='clear link'>
          <RkText rkType='accent'>TEST</RkText>
        </RkButton>
        <RkSwitch
          value={this.state.value}
          onValueChange={this.onSwitchValueChange}
        />
        <Text>灯光控制</Text>
        <View style={styles.buttonContainer}>
          <MButton icon="light" onPress={() => this.fetchSet('set_light_switch', {params: [true]})} name='灯光开' />
          <MButton icon="light" onPress={() => this.fetchSet('set_light_switch', {params: [false]})} name='灯光关' />
        </View>
        <Text>电源控制</Text>
        <View style={styles.buttonContainer}>
          <MButton icon="power" onPress={() => this.fetchSet('set_power_switch ', {params: [true]})} name='电源开' />
          <MButton icon="power" onPress={() => this.fetchSet('set_power_switch ', {params: [false]})} name='电源关' />
        </View>
        <Text>风速控制</Text>
        <View style={styles.buttonContainer}>
          <MButton icon="fan" onPress={() => this.fetchSet('set_wind_speed ', {params: [0]})} name='关' />
          <MButton icon="fan" onPress={() => this.fetchSet('set_wind_speed ', {params: [1]})} name='风速1' />
          <MButton icon="fan" onPress={() => this.fetchSet('set_wind_speed ', {params: [2]})} name='风速2' />
          <MButton icon="fan" onPress={() => this.fetchSet('set_wind_speed ', {params: [3]})} name='风速3' />
        </View>
        <Text>工作模式</Text>
        <View style={styles.buttonContainer}>
          <MButton icon="light" onPress={() => this.fetchSet('set_work_mode ', {params: [0]})} name='模式0' />
          <MButton icon="light" onPress={() => this.fetchSet('set_work_mode ', {params: [1]})} name='模式1' />
          <MButton icon="light" onPress={() => this.fetchSet('set_work_mode ', {params: [2]})} name='模式2' />
          <MButton icon="light" onPress={() => this.fetchSet('set_work_mode ', {params: [3]})} name='模式3' />
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