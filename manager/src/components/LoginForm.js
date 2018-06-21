import React, { Component } from 'react'
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
    render() { 
        return ( 
            <Card>
                <CardSection>
                    <Input label='Email' placeholder='example@email.com'/>
                </CardSection>
                <CardSection>
                    <Input label='Password' placeholder='password' secureTextEntry/>
                </CardSection>
                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
         )
    }
}
 
export default LoginForm;