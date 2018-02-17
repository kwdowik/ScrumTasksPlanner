import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { TaskDetails } from '../components/TaskDetails';
import { connect } from 'react-redux';
import { saveTask, editTaskPropertyValue, deleteTask } from '../actions/tasks';
import { getOneTask, getEditableState } from '../reducers/tasks'
import { getProjects } from "../reducers/projects";

const TaskDetailsPage = ({task, projects, editable, dispatch, history}) => {
    const handleDelete = task => {
        dispatch(deleteTask(task));
        history.goBack()
    };
    const handleSave = task => {
        dispatch(saveTask(task));
        history.goBack()
    };
    return (
        <View style={styles.container}>
            <TaskDetails
                task = {task}
                onDelete = {task => handleDelete(task)}
                editable = {editable}
                projects = {projects}
                onEdit = {(value, name) => dispatch(editTaskPropertyValue(value, name))}
                onSave = {task => handleSave(task)}
            />
        </View>
    )
};

TaskDetailsPage.propTypes = {
    task: PropTypes.shape({
        _id: PropTypes.string,
        assignedTo: PropTypes.string,
        priority: PropTypes.string,
        createDate: PropTypes.string,
        name: PropTypes.string,
        state: PropTypes.string,
    }).isRequired
};

const mapStateToProps = state => ({
    task: getOneTask(state.tasks),
    editable: getEditableState(state.tasks),
    projects: getProjects(state)
});

export default connect(mapStateToProps)(TaskDetailsPage);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});