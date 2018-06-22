import React from 'react'
import { Text, View } from 'react-native'

const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 30,
        textAlign: 'center',
        color: '#000'
    },
}
const Header = ( props ) => {
    const { textStyle, viewStyle } = styles;
    viewStyle.backgroundColor = props.bgColor || viewStyle.backgroundColor;
    textStyle.color = props.textColor || '#000';
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>
                {props.title}
            </Text>
        </View>
    )
}


export { Header };
