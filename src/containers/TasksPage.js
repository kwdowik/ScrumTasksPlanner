import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Icon } from 'react-native-elements'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import { connect } from 'react-redux';
import { TaskList } from '../components/TaskList';
import { taskDetails, filterTasks, setTabIndex } from '../actions/tasks.actions';
import { getTasksForCurrentUser, getTabIndex} from '../reducers/tasks.reducers';
import * as types from '../constans/ActionTypes';

const TasksPage = ({tasks, dispatch, history, tabIndex}) => {

    const taskTypeChange = (tabIndex) => {
        if(tabIndex ===  1) dispatch(filterTasks(types.SHOW_DONE));
        else if (tabIndex ===  2) dispatch(filterTasks(types.SHOW_IN_PROGRESS));
        else dispatch(filterTasks());
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
                <BottomNavigation labelColor="white" rippleColor="white" style={styles.bottomNavigation}
                                      onTabChange={taskTypeChange} activeTab={tabIndex}
                    >
                    <Tab
                        barBackgroundColor='#68c2ee'
                        label="All"
                        icon={<Icon size={24} color="white" name="list" />}
                    />
                    <Tab
                        barBackgroundColor='green'
                        label="Done"
                        icon={<Icon size={24} color="white" name="done" />}
                    />
                    <Tab
                        barBackgroundColor='orange'
                        label="In progress"
                        icon={<Icon size={24} color="white" name="build" />}
                    />
                    </BottomNavigation>
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
    tabIndex: getTabIndex(state)
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

