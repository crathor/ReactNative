import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, Text, FlatList } from 'react-native';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
    componentDidMount = () => {
      this.props.employeesFetch();
    }
    
    render() { 
        return ( 
            <View>
                <FlatList 
                    data={this.props.libraries}
                    renderItem={({item}) => <ListItem item={item} />}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
         )
    }
}

const mapStateToProps = state => {
    return {}
};
export default connect(null, { employeesFetch })(EmployeeList);