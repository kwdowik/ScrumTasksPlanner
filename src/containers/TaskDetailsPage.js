import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { TaskDetails } from '../components/TaskDetails';
import { connect } from 'react-redux';
import { saveTask, editTaskPropertyValue } from '../actions/index';
import { getOneTask, getEditableState } from '../reducers/tasks'

const TaskDetailsPage = ({task, editable, dispatch}) => {
    return (
        <View style={styles.container}>
            <TaskDetails
                task = {task}
                editable = {editable}
                onEdit = {(value, name) => dispatch(editTaskPropertyValue(value, name))}
                onSave = {(task) => dispatch(saveTask(task))}
            />
        </View>
    )
};

TaskDetailsPage.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        priority: PropTypes.string.isRequired,
        createDate: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired
    }).isRequired
};

const mapStateToProps = state => ({
    task: getOneTask(state.tasks),
    editable: getEditableState(state.tasks)
});

export default connect(mapStateToProps)(TaskDetailsPage);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});