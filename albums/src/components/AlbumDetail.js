import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ( {album} ) => {
    const { 
        title, 
        artist, 
        thumbnail_image,
        image,
        url
    } = album
    const { 
        artistContentStyle,
        artistTextStyle,
        thumbnailStyle,
        thumbnailContainerStyle,
        imageStyle
    } = styles
    return  (
        <Card>

            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        source={{uri: thumbnail_image}} 
                        style={thumbnailStyle}    
                    />
                </View>
                <View style={artistContentStyle}>
                    <Text style={artistTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image 
                    source={{uri: image}} 
                    style={imageStyle}    
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
            </CardSection>
        </Card>
    )
}

const styles = {
    artistContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    artistTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        flex: 1,
        height: 300,
        width: null
    }
}
export default AlbumDetail;