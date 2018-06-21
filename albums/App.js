/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView
} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

class App extends Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Header headerText={'Albums'}/>
          <AlbumList />
        </View>
      </SafeAreaView>
    )
  }
}

export default App;