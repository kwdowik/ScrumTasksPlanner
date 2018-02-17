import React, { Component } from 'react';
import {
    FormInput,
    FormLabel,
    Button
} from 'react-native-elements';
import { View, Text, ScrollView, StyleSheet, ActivityIndicator, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { tryLogin, editUserPropertyValue, clearLoginProperties, setErrorMessage, signingIn } from '../actions/users'
import { getAllProjects } from '../actions/projects'
import {getUser, isError, isSigningIn} from '../reducers/users';

const SignInPage = ({history, dispatch, user, isSigningIn, errorMessage}) => {
    const onSingInHandle = () => {
        Keyboard.dissmiss;
        tryLogin(user, dispatch).then(isLogged => {
            if(isLogged) {
                dispatch(getAllProjects());
                history.push('/tasks');
            }
            dispatch(signingIn(false));
        });
    };
    const onSingUpHandle = () => {
        Keyboard.dissmiss;
        dispatch(clearLoginProperties());
        dispatch(setErrorMessage(''));
        history.push('/singUp');
    };
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
                disabled={!user.username || !user.password || isSigningIn}
                onPress={() => onSingInHandle()}
                title="Sign in"
            />
            <Button
                buttonStyle={styles.buttonStyle}
                disabled={isSigningIn}
                onPress={() => onSingUpHandle()}
                title="Sign up"
            />
            {errorMessage !== '' &&
                <FormLabel labelStyle={styles.labelStyle}>{errorMessage}</FormLabel>
            }
            <ActivityIndicator size="large" color="#68c2ee" animating={isSigningIn}/>
        </ScrollView>
    )
};

const mapStateToProps = state => ({
    user: getUser(state.users),
    errorMessage: isError(state.users),
    isSigningIn: isSigningIn(state.users)
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