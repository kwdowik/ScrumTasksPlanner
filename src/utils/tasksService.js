import axios from 'axios';

export const getTasks = () => axios.get('http://localhost:3000/tasks')
    .then(response => {
        return response.data
    })
    .catch(error => {
        return error
    });

export const createTask = task => axios.put(`http://localhost:3000/tasks/${task.id}`, {
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


