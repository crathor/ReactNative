import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { 
    Card, 
    CardSection, 
    Button, 
    Input, 
    Spinner} from './common';

class LoginForm extends Component {
    state = { 
        email: '',
        password: '',
        error: '',
        loading: false
    }

    onButtonPress = () => {
        const { email, password } = this.state;

        this.setState({error: '', loading: true});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginSuccess = () => {
        this.setState({ 
            email: '',
            password: '',
            error: '',
            loading: false
         });
    }

    onLoginFail = () => {
        this.setState({
            loading: false,
            error: 'Authentication Failed.'
        })
    }
    renderButton = () => {
        if( this.state.loading){

            return <Spinner size='small' />

        }
        
        return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
    }

    render() { 
        console.log(this.state)
        return ( 
            <Card>
                <CardSection>
                    <Input 
                        label={'Email:'}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })} 
                        placeholder={'example@email.com'}   
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label={'Password:'}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })} 
                        placeholder={'password'}
                        secureTextEntry 
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
         )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}
export default LoginForm;