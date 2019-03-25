import React from 'react'
import { API_LEVEL, Package, Device, Service, Host } from 'miot'
import { PackageEvent, DeviceEvent } from 'miot'
import { View, Text } from 'react-native'

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>hell333o, this is a tiny plugin project of MIOT</Text>
        <Text>API_LEVEL:{API_LEVEL}</Text>
        <Text>NATIVE_API_LEVEL:{Host.apiLevel}</Text>
        <Text>{Package.packageName}</Text>
        <Text>models:{Package.models}</Text>
      </View>
    )
  }
}
Package.entry(App, () => {})
