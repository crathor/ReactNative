import React from 'react';
import { View, Text } from 'react-native';
import Deck from './src/Deck';
import { Card, Button } from 'react-native-elements';


const DATA = [
  { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];
const DATA2 = [
  { id: 9, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 10, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 11, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 12, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 13, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 14, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 15, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 16, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];

export default class App extends React.Component {
  state = {
    data: DATA
  }

  renderCard = (item) => {
    return (
      <Card
        title={item.text}
        image={{ uri: item.uri }}
        key={item.id}
      >
        <Text style={{ marginBottom: 10, textAlign: 'center'}}>I can customize the card further</Text>
        <Button 
          icon={{ name: 'code'}}
          backgroundColor='#03A9F4'
          title='View Now!'
        />
      </Card>
    )
  }

  renderNoMoreCards = () => {
    return (
      <Card title='All Done!'>
        <Text style={{marginBottom: 10}}>
          There's no more content here!
        </Text>
        <Button onPress={this.loadMoreData} title='Load More' backgroundColor='#007AFF'/>
      </Card>
    )
  };
  
  loadMoreData = () => {
    this.setState({ data: DATA2 });
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck 
          data={this.state.data}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
};
