import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { TaskList } from '../components/TaskList';
import { taskDetails } from "../actions/index";

const TasksPage = ({tasks, dispatch, history}) => {
    return (
        <ScrollView style={styles.container}>
            <TaskList
                onPress={task => dispatch(taskDetails(task))}
                tasks={tasks}
                history={history}
            />
        </ScrollView>
    );
};

TasksPage.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        priority: PropTypes.string.isRequired,
        createDate: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired
    })).isRequired
};

const mapStateToProps = state => ({
    tasks: state.tasks.getAllTasks
});

export default connect(mapStateToProps)(TasksPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});

