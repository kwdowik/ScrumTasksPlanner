import React, { Component } from 'react';
import { View, StyleSheet, Picker } from 'react-native';
import { FormInput, FormLabel, Button } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';

export const TaskDetails = ({task, projects, editable, onEdit, onSave, onDelete}) => {
    return(
        <View>
            <FormLabel>Name</FormLabel>
            <FormInput
                inputStyle={styles.formInput}
                value={task.name}
                onChangeText={e => onEdit(e, 'name')}
            />
            <Dropdown
                label='Project'
                containerStyle={styles.dropdownStyle}
                data={dropdownProjectData(projects)}
                value={task.projectName}
                onChangeText={e => onEdit(e, 'projectName')}
            />
            <Dropdown
                label='Priority'
                containerStyle={styles.dropdownStyle}
                data={dropdownPriorityData()}
                value={task.priority}
                onChangeText={e => onEdit(e, 'priority')}
            />
           <Dropdown
               label='State'
               containerStyle={styles.dropdownStyle}
               data={dropdownStateData()}
               value={task.state}
               onChangeText={e => onEdit(e, 'state')}
           />
            {task.createDate && (
                <FormLabel>Create date</FormLabel>,
                <FormInput
                    inputStyle={styles.formInput}
                    value={task.createDate}
                    />
                )
            }
            <FormLabel>Assigned</FormLabel>
            <FormInput
                inputStyle={styles.formInput}
                value={task.assignedTo}
                onChangeText={e => onEdit(e, 'assignedTo')}
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

const dropdownProjectData = projects => {
    let dates = projects.map((p,index) => {
        let data = {};
        data['value'] = p.projectName;
        return data
    });
    return dates;
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