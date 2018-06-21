import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import { connect } from 'react-redux'
import ListItem from './ListItem';

class LibraryList extends Component {
    render() { 
        return (
            <FlatList 
                data={this.props.libraries}
                renderItem={({item}) => <ListItem item={item} />}
                keyExtractor={(item) => item.id.toString()}
            />
        )
    }
}

const mapStateToProps = state => {
    return {libraries: state.libraries}
};


export default connect(mapStateToProps)(LibraryList);