import React, { Component } from 'react';
import {
    FormInput,
    FormLabel,
    Button
} from 'react-native-elements';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { tryLogin, editUserPropertyValue, clearLoginProperties, setErrorMessage } from "../actions/users"
import { getUser, isError } from '../reducers/users';
import TasksPage from "../containers/TasksPage";

const SignInPage = ({history, dispatch, user, errorMessage}) => {
    return (
        <ScrollView style={{padding: 20}}>
            <Text
                style={{fontSize: 27, marginBottom: 27, textAlign: 'center'}}>
                Login
            </Text>
            <FormInput
                placeholder='Username'
                autoCorrect={false}
                value={user.username}
                onChangeText={e => dispatch(editUserPropertyValue(e, 'username'))}
            />
            <FormInput
                placeholder='Password'
                autoCorrect={false}
                secureTextEntry={true}
                value={user.password}
                onChangeText={e => dispatch(editUserPropertyValue(e, 'password'))}
            />
            <View style={{margin:7}} />
            <Button
                buttonStyle={styles.buttonStyle}
                disabled={!user.username || !user.password}
                onPress={() => {
                    tryLogin(user,dispatch).then(isLogged => {
                        if(isLogged) history.push('/tasks');
                    });
                }}
                title="Sign in"
            />
            <Button
                buttonStyle={styles.buttonStyle}
                onPress={() => {
                    dispatch(clearLoginProperties());
                    dispatch(setErrorMessage(''));
                    history.push('/singUp');
                }}
                title="Sign up"
            />
            {errorMessage !== '' &&
                <FormLabel labelStyle={styles.labelStyle}>{errorMessage}</FormLabel>
            }
        </ScrollView>
    )
};

const mapStateToProps = state => ({
    user: getUser(state.users),
    errorMessage: isError(state.users)
});


const styles = StyleSheet.create({
    buttonStyle: {
        marginTop: 20,
        backgroundColor: '#68c2ee'
    },
    labelStyle: {
        color: 'red',
        textAlign: 'center'
    }
});

export default connect(mapStateToProps)(SignInPage);