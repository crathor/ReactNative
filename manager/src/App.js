import React, { Component } from 'react'
import { SafeAreaView, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm'

class App extends Component {
  componentDidMount = () => {
    const config = {
      apiKey: "AIzaSyApO_-s8PS_eX_kQQDINBok7TCkZehEwb4",
      authDomain: "managers-b7bc9.firebaseapp.com",
      databaseURL: "https://managers-b7bc9.firebaseio.com",
      projectId: "managers-b7bc9",
      storageBucket: "",
      messagingSenderId: "971238179834"
    };
    firebase.initializeApp(config);
  };
  
  render() { 
    return ( 
      <Provider store={createStore(reducers)}>
        <SafeAreaView style={styles.containerStyle}>
          <View>
            <LoginForm />
          </View>
        </SafeAreaView>
      </Provider>
     )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff'
  }
}
export default App;
