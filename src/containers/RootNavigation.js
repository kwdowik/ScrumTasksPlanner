import React, { Component } from 'react'
import { NativeRouter } from 'react-router-native'
import { connect } from 'react-redux';
import { Navigation, Card } from 'react-router-navigation'
import TasksPage  from './TasksPage'
import TaskDetailsPage from './TaskDetailsPage'
import SignInPage from './SignInPage'
import SingUpPage from './SingUpPage'

const RootNavigation = ({dispatch}) => (
     <NativeRouter>
        <Navigation>
            <Card
                exact
                path="/"
                title="Scrum Planner"
                component={SignInPage}
                />
            <Card
                backButtonTitle="Logout"
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
                backButtonTitle="Sign In"
                path="/singUp"
                title="Sing up"
                component={SingUpPage}
            />
        </Navigation>
     </NativeRouter>
);

export default connect()(RootNavigation);
