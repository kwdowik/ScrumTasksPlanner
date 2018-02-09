import React, { Component } from 'react';
import { View, StyleSheet, Picker } from 'react-native';
import { FormInput, FormLabel, Button } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';

export const TaskDetails = ({task, editable, onEdit, onSave, onDelete}) => {
    return(
        <View>
            <FormLabel>Name</FormLabel>
            <FormInput
                inputStyle={styles.formInput}
                value={task.name}
                onChangeText={e => onEdit(e, 'name')}
            />
            <FormLabel>Project</FormLabel>
            <FormInput
                inputStyle={styles.formInput}
                value={task.projectName}
                onChangeText={e => onEdit(e, 'projectName')}
            />
            <Dropdown
                label='Priority'
                containerStyle={styles.dropdownStyle}
                data={dropdownPriorityData()}
                onChangeText={e => onEdit(e, 'priority')}
            />
           <Dropdown
               label='State'
               containerStyle={styles.dropdownStyle}
               data={dropdownStateData()}
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
                disabled={!editable || !requiredPropertiesAreFillIn(task)}
                onPress={() => onSave(task)}
                raised
                icon={{name: 'save'}}
                buttonStyle={styles.addButtonStyle}
                title='Save' />
            {task.id !== undefined &&
            <Button
                onPress={() => onDelete(task)}
                icon={{name: 'delete'}}
                buttonStyle={styles.deleteButtonStyle}
                title='Delete' />
            }
        </View>
    );
};

const dropdownPriorityData = () => {
    return [
        {
            value: 'low'
        },
        {
            value: 'medium'
        },
        {
            value: 'high'
        }
        ];
};

const dropdownStateData = () => {
    return [
        {
            value: 'new'
        },
        {
            value: 'in progress'
        },
        {
            value: 'done'
        }
    ];
};

const requiredPropertiesAreFillIn = task => (
        task.name !== undefined &&
        task.projectName !== undefined &&
        task.priority !== undefined &&
        task.state !== undefined
);

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
    },
    dropdownStyle: {
        paddingLeft: 20,
        paddingRight: 20,
    }
});