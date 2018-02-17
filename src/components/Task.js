import React, { Component } from 'react';
import { ListItem, Badge } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';


export const Task = ({task}) => (
    <ListItem
        roundAvatar
        containerStyle={{backgroundColor: '#F5FCFF'}}
        avatar={task.userImg}
        title={
            <Badge containerStyle={{backgroundColor: '#e6e6e6'}}>
                <Text style={{color: '#68c2ee'}}>{task.name}</Text>
            </Badge>
        }
        subtitle={
            <View style={styles.subtitleView}>
                <Text style={getTaskPriorityStyle(task.priority)}>
                    {task.priority}
                </Text>
            </View>
        }
    />
);

styles = StyleSheet.create({
    subtitleView: {
        flexDirection: 'column',
        paddingLeft: 10,
        paddingTop: 5
    },
    highPriority: {
        color: 'red',
        marginLeft: 5
    },
    mediumPriority: {
        color: 'orange',
        marginLeft: 5
    },
    lowPriority: {
        color: 'grey',
        marginLeft: 5

    },
    dateText: {
        color: '#cccccc',
        marginLeft: 20
    }
});

function getTaskPriorityStyle(priority) {
    switch(priority.toLowerCase()){
        case 'high': return styles.highPriority;
        case 'medium': return styles.mediumPriority;
        case 'low': return styles.lowPriority;
    }
}
