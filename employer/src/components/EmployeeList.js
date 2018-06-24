import React, { Component } from 'react'
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { Spinner } from './common';
import { employeesFetch } from '../actions';
import _ from 'lodash';
import ListItem from './ListItem';

class EmployeeList extends Component {

    componentDidMount = () => {
        this.props.employeesFetch();
    }
    
    renderList = () => {
        console.log(this.props.employees.uid);
        if(this.props.employees.length >= 1){
            return (
                <FlatList 
                    data={this.props.employees}
                    renderItem={({item}) => <ListItem employee={item}/>}
                    keyExtractor={(item) => item.phone}
                />
            )
        }
        return <Spinner />
    }

    render() {
        return this.renderList()    
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid}; // { shift: 'Monday', name: 'Nick', phone: '555-555-5555', uid: '1FDUjikd...'}
    });
    return { employees }
};
export default connect(mapStateToProps, { employeesFetch })(EmployeeList);