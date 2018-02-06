import axios from 'axios';

const URL = 'http://localhost:3000/tasks/';


const getTasks = () => axios.get(URL)
    .then(response => {
        return response.data
    })
    .catch(error => {
        return error
    });

const updateTask = task => axios.patch(URL+task.id, {
    url: task.url,
    createDate: task.createDate,
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

const createTask = task => axios.post(URL, {
    id: Math.floor((Math.random() * 100000) + 1),
    url: task.url,
    createDate: task.createDate,
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

const removeTask = task => axios.delete(URL+task.id)
    .then(response => response)
    .catch(err => err);


export default {
    removeTask: removeTask,
    createTask: createTask,
    updateTask: updateTask,
    getTasks: getTasks
}
