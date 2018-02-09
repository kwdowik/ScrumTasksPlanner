import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { TaskDetails } from '../components/TaskDetails';
import { connect } from 'react-redux';
import { saveTask, editTaskPropertyValue, deleteTask } from '../actions/tasks';
import { getOneTask, getEditableState } from '../reducers/tasks'

const TaskDetailsPage = ({task, editable, dispatch, history}) => {
    return (
        <View style={styles.container}>
            <TaskDetails
                task = {task}
                onDelete = {(task) => {
                    dispatch(deleteTask(task));
                    history.goBack()
                }}
                editable = {editable}
                onEdit = {(value, name) => dispatch(editTaskPropertyValue(value, name))}
                onSave = {(task) => {
                    dispatch(saveTask(task));
                    history.goBack()
                }}
            />
        </View>
    )
};

TaskDetailsPage.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string,
        url: PropTypes.string,
        priority: PropTypes.string.isRequired,
        createDate: PropTypes.string,
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