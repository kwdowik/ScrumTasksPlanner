import React, { Component } from 'react';
import {
    FormInput,
    FormLabel,
    Button
} from 'react-native-elements';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { tryRegisterUser, editUserPropertyValue } from "../actions/users"
import { getUser, isError } from '../reducers/users';

const SingUpPage = ({history, dispatch, user, errorMessage}) => {
    return (
        <ScrollView style={{padding: 20}}>
            <Text
                style={{fontSize: 27, marginBottom: 27, textAlign: 'center'}}>
                Register
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
            <FormInput
                placeholder='Project name'
                autoCorrect={false}
                value={user.projectName}
                onChangeText={e => dispatch(editUserPropertyValue(e, 'projectName'))}
            />
            <View style={{margin:7}} />
            <Button
                buttonStyle={styles.buttonStyle}
                disabled={!user.username || !user.password}
                onPress={() => {
                    tryRegisterUser(user, dispatch).then(isUserValid => {
                        if(isUserValid) history.goBack();
                    })
                }}
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

export default connect(mapStateToProps)(SingUpPage);