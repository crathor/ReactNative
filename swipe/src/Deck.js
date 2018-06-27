import React, { Component } from 'react';
import { 
    View, 
    Animated,
    PanResponder,
    Dimensions,
    StyleSheet,
    LayoutAnimation,
    UIManager
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.30 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

class Deck extends Component {
    static defaultProps = {
        onSwipeRight: () => {},
        onSwipeLeft: () => {}
    }

    constructor(props) {
        super(props)
        
        const position = new Animated.ValueXY();
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                position.setValue({ x: gesture.dx })
            },
            onPanResponderRelease: (event, gesture) => {
                if (gesture.dx > SWIPE_THRESHOLD) {
                    this.forceSwipe('right');
                } else if (gesture.dx < -SWIPE_THRESHOLD) {
                    this.forceSwipe('left');
                } else {
                    this.resetPosition();
                }
            }
        });

        this.state = {
            panResponder,
            position,
            index: 0
        };
    };

    componentDidUpdate = (prevProps) => {
        if( this.props.data !== prevProps.data){
            this.setState({ index: 0 });
        }
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    }

    forceSwipe = (direction) => {
        const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
        Animated.timing(this.state.position, {
            toValue: { x, y: 0 },
            duration: SWIPE_OUT_DURATION
        }).start(() => this.onSwipeComplete(direction));
    }

    onSwipeComplete = (direction) => {
        const { onSwipeLeft, onSwipeRight, data } = this.props;
        const item = data[this.state.index];

        direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
        this.state.position.setValue({x: 0, y: 0});
        this.setState(prevState => ({ index: prevState.index + 1  }));
    }

    resetPosition = () => {
        Animated.spring(this.state.position, {
            toValue: {x: 0, y: 0}
        }).start();
    }

    getCardStyle = () => {
        const { position } = this.state;
        const rotate = position.x.interpolate({
            inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
            outputRange: ['-120deg', '0deg', '120deg']
        })
        return {
            ...position.getLayout(),
            transform: [{rotate}]
        }
    }

    renderCards = () => {
        if (this.state.index >= this.props.data.length) {
            return this.props.renderNoMoreCards();
        }

        return this.props.data.map( (data, i)  => {
            if (i < this.state.index) return null;

            if (i === this.state.index) {
                return (
                    <Animated.View
                        style={[this.getCardStyle(), styles.cardStyle]} 
                        key={data.id}
                        {...this.state.panResponder.panHandlers}
                    >
                        {this.props.renderCard(data)}
                    </Animated.View>
                );
            }

            return (
                <Animated.View 
                    style={[styles.cardStyle, { top: 8 * (i - this.state.index)}]}
                    key={data.id}
                >
                    {this.props.renderCard(data)}
                </Animated.View>
            );
        }).reverse();
    }
    
    render() { 
        return ( 
            <View style={styles.container}>
                {this.renderCards()}
            </View>
         )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
    },
    cardStyle: {
        position: 'absolute',
        width: SCREEN_WIDTH,
        zIndex: 1
    }
});
 
export default Deck;