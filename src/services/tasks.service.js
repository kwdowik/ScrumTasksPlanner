import axios from 'axios';
import qs from 'qs';
import appConfig from '../../app.json';

const BASE_URL = appConfig['environment'] === 'production'
    ? 'https://scrum-tasks-planner-server.herokuapp.com/v1/tasks/'
    : 'http://localhost:5000/v1/tasks/';

const getTasks = () => axios.get(BASE_URL)
    .then(response => {
        return response.data
    })
    .catch(error => {
        return error
    });

const updateTask = task => axios.patch(`${BASE_URL+task._id}`, qs.stringify({
        assignedTo: task.assignedTo,
        createDate: task.createDate,
        projectName: task.projectName,
        priority: task.priority,
        name: task.name,
        state: task.state,
        userImg: task.userImg
    }))
    .then(response => {
        return response
    })
    .catch(error => {
        return error
    });

const createTask = task => axios.post(BASE_URL, qs.stringify({
        assignedTo: task.assignedTo,
        projectName: task.projectName,
        createDate: new Date().toLocaleString(),
        priority: task.priority,
        name: task.name,
        state: task.state,
        userImg: task.userImg
}))
    .then(response => {
        return response
    })
    .catch(error => {
        return error
    });

const removeTask = task => axios.delete(`${BASE_URL+task._id}`)
    .then(response => response)
    .catch(err => err);


export default {
    removeTask: removeTask,
    createTask: createTask,
    updateTask: updateTask,
    getTasks: getTasks
}


