import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'
import { connect } from 'react-redux';
import { TaskList } from '../components/TaskList';
import { taskDetails } from '../actions/tasks';
import { getTasksForCurrentUser } from '../reducers/tasks';

const TasksPage = ({tasks, dispatch, history}) => {
    return (
        <ScrollView style={styles.container}>
            <TaskList
                onPress={task => dispatch(taskDetails(task))}
                tasks={tasks}
                history={history}
            />
            <Button
                onPress={() => {
                    history.push(`/taskDetails`);
                    dispatch(taskDetails({}))
                }}
                icon={{name: 'add'}}
                buttonStyle={styles.buttonStyle}
                title='Add' />
        </ScrollView>
    );
};

TasksPage.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        priority: PropTypes.string.isRequired,
        createDate: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired
    })).isRequired
};

const mapStateToProps = state => ({
    tasks: getTasksForCurrentUser(state)
});

export default connect(mapStateToProps)(TasksPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    buttonStyle: {
        marginTop: 20,
        backgroundColor: '#68c2ee'
    },
});

