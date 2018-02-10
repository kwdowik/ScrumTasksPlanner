import axios from 'axios';
import { guid } from './utils/guid';

const BASE_URL = 'http://localhost:3000/tasks/';

const getTasks = () => axios.get(BASE_URL)
    .then(response => {
        return response.data
    })
    .catch(error => {
        return error
    });

const updateTask = task => axios.patch(`${BASE_URL+task.id}`, {
    assignedTo: task.assignedTo,
    createDate: task.createDate,
    projectName: task.projectName,
    priority: task.priority,
    name: task.name,
    state: task.state
    })
    .then(response => {
        return response
    })
    .catch(error => {
        return error
    });

const createTask = task => axios.post(BASE_URL, {
    id: guid(),
    assignedTo: task.assignedTo,
    projectName: task.projectName,
    createDate: new Date().toLocaleString(),
    priority: task.priority,
    name: task.name,
    state: task.state
    })
    .then(response => {
        return response
    })
    .catch(error => {
        return error
    });

const removeTask = task => axios.delete(`${BASE_URL+task.id}`)
    .then(response => response)
    .catch(err => err);


export default {
    removeTask: removeTask,
    createTask: createTask,
    updateTask: updateTask,
    getTasks: getTasks
}


