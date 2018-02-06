import taskService from '../utils/tasksService';
import * as types from '../constans/ActionTypes';

export const getAllTasks = () => dispatch => {
    taskService.getTasks().then(tasks => {
        console.log(`getAllTasks, length:${tasks}`);
        dispatch(receiveTasks(tasks));
    })
};

export const taskDetails = task => (
    console.log(`action -> taskDetails`),
        {
    type: types.TASK_DETAILS,
    task
});

export const saveTask = task => dispatch => {
    if(task.id === undefined) {
        taskService.createTask(task).then(response => {
            dispatch(getAllTasks());
            console.log(`Added task: ${response}`);
            dispatch(addTask(task));
        }).catch(err => console.log(`Error during saveTask operation ,err: ${err}`))
    }else {
        taskService.updateTask(task).then(response => {
            dispatch(getAllTasks());
            console.log(`Updated task: ${response}`);
            dispatch(addTask(task));
        }).catch(err => console.log(`Error during saveTask operation ,err: ${err}`))
    }
};

export const addTask = task => (
    console.log(`action -> saveTask`),
    {
    type: types.SAVED_EDITED_TASK,
        task
});


export const deleteTask = task => dispatch => {
    taskService.removeTask(task).then(response => {
        dispatch(getAllTasks());
        console.log(`Removed task: ${response}`);
    }).catch(err => console.log(`Error during deleteTask operation ,err: ${err}`))
};

export const editTaskPropertyValue = (value, name) => (
    console.log(`action -> editTaskPropertyValue`),
        {
            type: types.EDIT_TASK_PROPERTY,
            name,
            value
        }
);

const receiveTasks = tasks => (
    console.log(`action -> receiveTasks`),
        {
    type: types.RECEIVE_TASKS,
    tasks
});



