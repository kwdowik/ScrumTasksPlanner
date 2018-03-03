import React, { Component } from 'react';
import {
    FormInput,
    FormLabel,
    Button
} from 'react-native-elements';
import { View, Text, ScrollView, StyleSheet, ActivityIndicator, Keyboard, Vibration } from 'react-native';
import { connect } from 'react-redux';
import {tryLogin, editUserPropertyValue, setErrorMessage, signingIn} from '../actions/users.actions'
import { getAllProjects } from '../actions/projects.actions'
import {getUser, getError, getSigningIn} from '../reducers/users.reducers';

const SignInPage = ({history, dispatch, user, isSigningIn, errorMessage}) => {
    const onSingInHandle = () => {
        Keyboard.dissmiss;
        tryLogin(user, dispatch).then(isLogged => {
            if(isLogged) {
                dispatch(getAllProjects());
                history.push('/tasks');
                clearInputs();
            }else
                Vibration.vibrate();
            dispatch(signingIn(false));
        });
    };
    const onSingUpHandle = () => {
        Keyboard.dissmiss;
        clearInputs();
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
                ref={input => this.usernameInput = input}
                placeholder='Username'
                autoCorrect={false}
                enabled={!isSigningIn}
                onChangeText={e => dispatch(editUserPropertyValue(e, 'username'))}
            />
            <FormInput
                ref={input => this.passwordInput = input}
                placeholder='Password'
                autoCorrect={false}
                enabled={!isSigningIn}
                secureTextEntry={true}
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

const clearInputs = () => {
    if(this.usernameInput) this.usernameInput.clearText();
    if(this.passwordInput) this.passwordInput.clearText();
};

const mapStateToProps = state => ({
    user: getUser(state.users),
    errorMessage: getError(state.users),
    isSigningIn: getSigningIn(state.users)
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