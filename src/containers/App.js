import React, { Component } from 'react'
import {
    StyleSheet,
    View
} from 'react-native';
import { NativeRouter, Link } from 'react-router-native'
import { Text } from 'react-native'
import { Navigation, Card } from 'react-router-navigation'
import TasksPage  from './TasksPage'
import TaskDetailsPage from './TaskDetailsPage'

export const App = () => (
     <NativeRouter>
        <Navigation>
            <Card
                exact
                path="/"
                title="Index"
                render={() => (
                    <View style={styles.scene}>
                        <Link to='/tasks'>
                            <Text>Push a new scene</Text>
                        </Link>
                    </View>
                )}
                />
            <Card
                exact
                path="/tasks"
                title="Tasks"
                component={TasksPage}
            />
            <Card
                exact
                path="/taskDetails"
                title="Task Details"
                component={TaskDetailsPage}
            />
        </Navigation>
     </NativeRouter>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 20,
    },
});

