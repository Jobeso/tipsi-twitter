import React, { Component } from 'react'
import {
  Alert,
  AppRegistry,
  StyleSheet,
  Button,
  View,
} from 'react-native'
import { TPSTwitterModule } from 'tipsi-twitter'

await TPSTwitterModule.init({
  consumerKey: 'T2VS8tuBEOMBO604qSkg',
  consumerSecret: 'yB8RTQUoUvgcQb0DpSXRIcW2GX8aymjFDnQVYMGCo',
})

export default class example extends Component {
  handleTwitterPress = async () => {
    const result = await TPSTwitterModule.login()
    Alert.alert(
      'Login success',
      `@${result.userName}`,
      [{ text: 'OK' }]
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Login via Twitter" onPress={this.handleTwitterPress} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})

AppRegistry.registerComponent('example', () => example)
