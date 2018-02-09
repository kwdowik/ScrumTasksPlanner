import React, { Component } from 'react';
import { List } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import { Task } from "./Task";
import Link from "react-router-native/Link";

export const TaskList = ({tasks, onPress, history}) => (
    <View>
        <List>
            {
                tasks.map((task, index) => (
                    <Link key={ index }
                          onPress={() => onPress(task)}
                          to={`/taskDetails`}>
                        <Task
                            task = { task }
                        />
                    </Link>
                ))
            }
        </List>


    </View>
);






