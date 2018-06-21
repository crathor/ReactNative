import React, { Component } from 'react';
import { 
    Text, 
    TouchableWithoutFeedback, 
    View ,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { CardSection } from './common';

class ListItem extends Component {

    componentDidUpdate() {
        LayoutAnimation.spring();
    } 

    renderDescription = () => {
        const { item, expanded } = this.props;
        if (expanded) {
            return (
                <CardSection>
                    <Text style={{paddingHorizontal: 10}}>{item.description}</Text>
                </CardSection>
            )
        }
        return null;
    }
    render() { 
        const { title, description, id } = this.props.item;
        const { titleStyle, cardSectionStyle } = styles;
        return ( 
            <TouchableWithoutFeedback onPress={() => {this.props.selectLibrary(id)}}>
                <View>
                    <CardSection style={cardSectionStyle}>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
         )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 18,
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.item.id;
    return { expanded }
};

export default connect(mapStateToProps, actions)(ListItem);