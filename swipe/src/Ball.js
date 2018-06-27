import React, { Component } from 'react'
import { View, Animated } from 'react-native';

class Ball extends Component {
    state={
        position: new Animated.ValueXY(0, 0)
    }
    componentDidMount = () => {
      Animated.timing(this.state.position, {
          toValue: {x: 200, y:500},
          duration: 5000
      }).start();
    }
    
    render() { 
        return ( 
            <Animated.View style={this.state.position.getLayout()}>
                <View style={styles.ball}/>
            </Animated.View>
         )
    }
}

const styles = {
    ball: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 30,
        borderColor: '#000'
    }
}

export default Ball;
