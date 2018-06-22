import React, { Component } from 'react'
import { SafeAreaView, View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import RouterComponent from './Router';

// test@test.com
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return ( 
        <Provider store={store}>
            <RouterComponent />
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
