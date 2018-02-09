import React, { Component } from 'react'
import { NativeRouter } from 'react-router-native'
import { Navigation, Card } from 'react-router-navigation'

import TasksPage  from './TasksPage'
import TaskDetailsPage from './TaskDetailsPage'
import SignInPage from './SignInPage'
import SingUpPage from './SingUpPage'

export const RootNavigation = () => (
     <NativeRouter>
        <Navigation>
            <Card
                exact
                path="/"
                title="Scrum Planner"
                component={SignInPage}
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
            <Card
                exact
                path="/singUp"
                title="Sing up"
                component={SingUpPage}
            />
        </Navigation>
     </NativeRouter>
);
