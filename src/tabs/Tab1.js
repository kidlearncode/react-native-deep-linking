/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Linking
} from 'react-native';
import DeepLinking from 'react-native-deep-linking';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Tab1 extends Component {

  componentDidMount() {
    // Đăng kí scheme
    DeepLinking.addScheme('example://myapp/');
    Linking.addEventListener('url', this.handleUrl);
    // Đăng kí sự kiện sẽ được thực hiện khi app đươcj mở bằng đường link example://myapp/test/3 
    DeepLinking.addRoute('test/:id', (response) => {
      console.log("===============" + JSON.stringify(response))
      if (response.id == 3) {
        this.props.navigator.push({
          screen: 'screen.Screen2',
          title: 'Screen 2'
        })
      } else {
        // Do something
      }
    });
  }
  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleUrl);
  }

  handleUrl = ({ url }) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        DeepLinking.evaluateUrl(url);
      }
    });
  }



  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Tab 1!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
