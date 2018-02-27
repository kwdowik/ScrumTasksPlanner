import React, { Component } from 'react';
import {
    FormInput,
    FormLabel,
    Button,
} from 'react-native-elements';
import { View, Text, ScrollView, StyleSheet, Keyboard, Vibration } from 'react-native';
import { connect } from 'react-redux';
import { tryRegisterUser, editUserPropertyValue } from "../actions/users.action"
import { getUser, isError } from '../reducers/users';
import Camera from '../components/Camera';

const SingUpPage = ({history, dispatch, user, errorMessage}) => {
    const setUserPhoto = (uri) => {
        dispatch(editUserPropertyValue(uri, 'photo'));
    };
    const tryToSignUp = () => {
        Keyboard.dissmiss;
        tryRegisterUser(user, dispatch).then(isUserValid => {
            if(isUserValid) history.goBack();
            else Vibration.vibrate();
        })
    };
    return (
        <ScrollView style={{padding: 20}}>
            <Text
                style={{fontSize: 27, marginBottom: 27, textAlign: 'center'}}>
                Register
            </Text>
            <FormInput
                placeholder='Username'
                autoCorrect={false}
                ref={input => this.usernameInput = input}
                onChangeText={e => dispatch(editUserPropertyValue(e, 'username'))}
            />
            <FormInput
                placeholder='Password'
                autoCorrect={false}
                secureTextEntry={true}
                ref={input => this.passwordInput = input}
                onChangeText={e => dispatch(editUserPropertyValue(e, 'password'))}
            />
            <FormInput
                placeholder='Project name'
                autoCorrect={false}
                ref={input => this.projectInput = input}
                onChangeText={e => dispatch(editUserPropertyValue(e, 'projectName'))}
            />
            <View style={{margin:7}} />
            <Camera
                title={ !user.photo ? "Add photo" : "Change photo"}
                buttonStyle = { !user.photo ? {backgroundColor: '#68c2ee'} : {backgroundColor: 'green'}}
                selectedPhoto={(uri) => setUserPhoto(uri)}/>
            <Button
                buttonStyle={styles.buttonStyle}
                disabled={!user.username || !user.password}
                onPress={() => tryToSignUp()}
                title="Sign Up"
            />
            {errorMessage !== '' &&
            <FormLabel labelStyle={styles.labelStyle}>{errorMessage}</FormLabel>
            }
        </ScrollView>
    )
};

const mapStateToProps = state => ({
    user: getUser(state.users),
    errorMessage: isError(state.users),
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

export default connect(mapStateToProps)(SingUpPage);