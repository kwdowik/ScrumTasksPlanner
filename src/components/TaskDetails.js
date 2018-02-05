import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { FormInput, FormLabel, Button } from 'react-native-elements';

export const TaskDetails = ({task, editable, onEdit, onSave}) => {
    console.log(`Editable: ${editable}`)
    return(
        <View>
            <FormLabel>Name</FormLabel>
            <FormInput
                inputStyle={styles.formInput}
                value={task.name}
                onChangeText={onEdit}
            />
            <FormLabel>Priority</FormLabel>
            <FormInput
                inputStyle={styles.formInput}
                value={task.priority}
            />
            <FormLabel>State</FormLabel>
            <FormInput
                inputStyle={styles.formInput}
                value={task.state}
                onChangeText={e => onEdit(e, 'state')}
            />
            <FormLabel>Create date</FormLabel>
            <FormInput
                inputStyle={styles.formInput}
                value={task.createDate}
                onChangeText={onEdit}
            />
            <FormLabel>Url</FormLabel>
            <FormInput
                inputStyle={styles.formInput}
                value={task.url}
                onChangeText={onEdit}
            />
            <Button
                disabled={!editable}
                onPress={() => onSave(task)}
                raised
                icon={{name: 'save'}}
                buttonStyle={styles.buttonStyle}
                title='Save' />
        </View>
    );
};

const styles = StyleSheet.create({
    formInput: {
        color: '#68c2ee'
    },
    buttonStyle: {
        marginTop: 20,
        backgroundColor: '#68c2ee'
    }
});