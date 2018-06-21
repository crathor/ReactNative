import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';



class App extends Component {
    state = {
        loggedIn: null
    }
    componentDidMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDiYinVZhHRC8LalUUq5aMcOdTs8ovbcIE',
            authDomain: 'authentication-e8b35.firebaseapp.com',
            databaseURL: 'https://authentication-e8b35.firebaseio.com',
            projectId: 'authentication-e8b35',
            storageBucket: 'authentication-e8b35.appspot.com',
            messagingSenderId: '546526520050'
          });
        firebase.auth().onAuthStateChanged((user) => {
            if( user ) {
                this.setState({ loggedIn: true  });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent = () => {
        switch (this.state.loggedIn){
            case true: 
                return (
                    <View style={{height: 40}}>
                        <Button onPress={() => {firebase.auth().signOut()}}>Logout</Button>
                    </View>
                )
            case false: return <LoginForm />
            default: 
                return (
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Spinner />
                    </View>
                )
        }
    }
    render(){
        return (
            <SafeAreaView style={styles.containerStyle}>
                <View style={styles.containerStyle}>
                    <Header title={'Authentication'} />
                    {this.renderContent()}
                </View>
            </SafeAreaView>
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