import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';


const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <SafeAreaView style={styles.containerStyle}>
        <View>
          <Header title={'Tech Stack'} bgColor={'#d89115'} textColor={'#fff'}/>
          <LibraryList />
        </View>
      </SafeAreaView>
    </Provider>
  )
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#e1e1e1'
  }
}
export default App;