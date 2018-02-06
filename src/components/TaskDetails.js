import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { FormInput, FormLabel, Button } from 'react-native-elements';

export const TaskDetails = ({task, editable, onEdit, onSave, onDelete}) => {
    return(
        <View>
            <FormLabel>Name</FormLabel>
            <FormInput
                inputStyle={styles.formInput}
                value={task.name}
                onChangeText={e => onEdit(e, 'name')}
            />
            <FormLabel>Priority</FormLabel>
            <FormInput
                inputStyle={styles.formInput}
                value={task.priority}
                onChangeText={e => onEdit(e, 'priority')}
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
                onChangeText={e => onEdit(e, 'createDate')}
            />
            <FormLabel>Url</FormLabel>
            <FormInput
                inputStyle={styles.formInput}
                value={task.url}
                onChangeText={e => onEdit(e, 'url')}
            />
            <Button
                disabled={!editable}
                onPress={() => onSave(task)}
                raised
                icon={{name: 'save'}}
                buttonStyle={styles.addButtonStyle}
                title='Save' />
            {task !== undefined &&
            <Button
                onPress={() => onDelete(task)}
                icon={{name: 'delete'}}
                buttonStyle={styles.deleteButtonStyle}
                title='Delete' />
            }

        </View>
    );
};

const styles = StyleSheet.create({
    formInput: {
        color: '#68c2ee'
    },
    addButtonStyle: {
        marginTop: 20,
        backgroundColor: '#68c2ee'
    },
    deleteButtonStyle: {
        marginTop: 20,
        backgroundColor: '#df2020'
    }
});