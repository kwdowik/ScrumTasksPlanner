import taskService from '../services/tasks.service';
import * as types from '../constans/ActionTypes';

export const getAllTasks = () => dispatch => {
    taskService.getTasks().then(tasks => {
        dispatch(receiveTasks(tasks));
    })
};

export const taskDetails = task => (
        {
    type: types.TASK_DETAILS,
    task
});

export const saveTask = task => dispatch => {
    if(task._id === undefined) {
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
        {
            type: types.EDIT_TASK_PROPERTY,
            name,
            value
        }
);

const receiveTasks = tasks => (
    {
        type: types.RECEIVE_TASKS,
        tasks
    }
);



