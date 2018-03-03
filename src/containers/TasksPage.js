import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements'
import { connect } from 'react-redux';
import { TaskList } from '../components/TaskList';
import { taskDetails, filterTasks, setTabIndex } from '../actions/tasks.actions';
import { getTasksForCurrentUser, getTabIndex} from '../reducers/tasks.reducers';
import * as types from '../constans/ActionTypes';
import {BottomNav} from "../components/BottomNav";

const TasksPage = ({tasks, dispatch, history, tabIndex}) => {

    const taskTypeChanged = (tabIndex) => {
        if(tabIndex ===  1) dispatch(filterTasks(types.SHOW_DONE));
        else if (tabIndex ===  2) dispatch(filterTasks(types.SHOW_IN_PROGRESS));
        else dispatch(filterTasks(types.SHOW_ALL));
        dispatch(setTabIndex(tabIndex));
    };
    return (
        <View style={styles.container}>
            <View style={{flex: 8}}>
            <ScrollView>
            <TaskList
                onPress={task => dispatch(taskDetails(task))}
                tasks={tasks}
                history={history}
            />
            </ScrollView>
                <Button
                onPress={() => {
                    history.push(`/taskDetails`);
                    dispatch(taskDetails({}))
                }}
                icon={{name: 'add'}}
                buttonStyle={styles.buttonStyle}
                title='Add' />
            </View>
            <View style={{flex: 1}}>
                <BottomNav
                    onTaskTypeChanged = {taskTypeChanged}
                    tabIndex = {tabIndex}
                    styles = {styles}
                />
            </View>
        </View>
    );
};

TasksPage.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        assignedTo: PropTypes.string,
        priority: PropTypes.string.isRequired,
        createDate: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        userImg: PropTypes.string
    })).isRequired
};

const mapStateToProps = state => ({
    tasks: getTasksForCurrentUser(state),
    tabIndex: getTabIndex(state.tasks)
});

export default connect(mapStateToProps)(TasksPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5fcff',
    },
    buttonStyle: {
        backgroundColor: '#68c2ee'
    },
    bottomNavigation: {
        elevation: 8,
        position: 'absolute',
        left: 0, bottom: 0, right: 0
    }
});

