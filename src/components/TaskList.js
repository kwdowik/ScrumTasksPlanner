import React, { Component } from 'react';
import { List } from 'react-native-elements';
import { Task } from "./Task";
import Link from "react-router-native/Link";

export const TaskList = ({tasks, onPress}) => (
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
);





