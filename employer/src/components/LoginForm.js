import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions'

class LoginForm extends Component {
    
    onEmailChange = (text) => {
        this.props.emailChanged(text);
    }

    onPasswordChange = (text) => {
        console.log(text);
        this.props.passwordChanged(text);
    }

    onButtonPress = () => {
        const {email, password} = this.props;

        this.props.loginUser({email, password});
    }

    renderError = () => {
        if(this.props.error) {
            return (
                <View style={{backgroundColor: '#fff'}}>
                    <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                </View>
            )
        }
    }

    renderButton = () => {
        if(this.props.loading){
            return <Spinner />
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        )
    }
    render() { 
        return ( 
            <Card>
                <CardSection>
                    <Input 
                        label='Email' 
                        placeholder='example@email.com'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label='Password' 
                        placeholder='password'
                        value={this.props.password}
                        onChangeText={this.onPasswordChange.bind(this)}
                        secureTextEntry
                    />
                </CardSection>
                    {this.renderError()}
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
        color: 'red',
        alignSelf: 'center'
    }
}
const mapStateToProps = state => {
    const { email, password, error, loading } = state.auth;
    return { email, password, error, loading };
};

export default connect(
        mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm
    );