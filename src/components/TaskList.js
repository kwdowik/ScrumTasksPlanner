import React, { Component } from 'react';
import { List } from 'react-native-elements';
import { View } from 'react-native';
import { Task } from './Task';
import Link from 'react-router-native/Link';
import * as types from '../constans/ActionTypes';

export const TaskList = ({tasks, onPress}) => (
    <View>
        <List>
            {
                tasks.map((task, index) => (
                    <Link key={ index }
                          onPress={() => onPress(task)}
                          to={`/taskDetails`}>
                        <Task
                            taskDone={task.state === types.SHOW_DONE}
                            task = { task }
                        />
                    </Link>
                ))
            }
        </List>
    </View>
);






