import taskService from '../services/tasks.service';
import userService from '../services/user.service';
import * as types from '../constans/ActionTypes';

export const getAllTasks = () => dispatch => {
    taskService.getTasks().then(tasks => {
        dispatch(receiveTasks(tasks, 'all'));
    })
};

export const saveTask = task => dispatch => {
    userService.getUserByUsername(task.assignedTo)
        .then(user => user.photo)
        .catch(msg => console.log('User does not exist'))
        .then(userPhoto => {
            task.userImg = userPhoto;
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
        })

};

export const deleteTask = task => dispatch => {
    taskService.removeTask(task).then(response => {
        dispatch(getAllTasks());
        console.log(`Removed task: ${response}`);
    }).catch(err => console.log(`Error during deleteTask operation ,err: ${err}`))
};

export const filterTasks = filter => dispatch => {
    taskService.getTasks().then(tasks => {
        dispatch(receiveTasks(tasks, filter));
    })
};

export const setTabIndex = index => (
    {
        type: types.SET_TAB_INDEX,
        index
    }
);

export const taskDetails = task => (
    {
        type: types.TASK_DETAILS,
        task
    });

export const addTask = task => (
    {
    type: types.SAVED_EDITED_TASK,
        task
});

export const editTaskPropertyValue = (value, name) => (
        {
            type: types.EDIT_TASK_PROPERTY,
            name,
            value
        }
);

const receiveTasks = (tasks, filter) => (
    {
        type: types.RECEIVE_TASKS,
        tasks,
        filter
    }
);



