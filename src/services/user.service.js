import axios from 'axios';
import qs from 'qs';
import appConfig from '../../app.json';
import {addProject} from './project.service';

const BASE_URL = appConfig['environment'] === 'production'
    ? 'https://scrum-tasks-planner-server.herokuapp.com/v1/users/'
    : 'http://localhost:5000/v1/users/';
const BASE_AUTH_URL = appConfig['environment'] === 'production'
    ? 'https://scrum-tasks-planner-server.herokuapp.com/v1/auth/login'
    : 'http://localhost:5000/v1/auth/login';


const getUsers = () => axios.get(BASE_URL)
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error
        });


const getUserByUsername = username => {
    return isUserAlreadyExist(username)
        .then(foundedUser => foundedUser)
        .catch(err => console.error(err));
};

const addUser = user => axios.post(BASE_URL, qs.stringify({
        username: user.username,
        password: user.password,
        createDate: new Date().toLocaleString(),
        projectName: user.projectName,
        photo: user.photo
    }))
    .then(response => {
        return response
    })
    .catch(error => {
        return error
    });

const registerUser = user => {
    return isUserAlreadyExist(user.username)
        .then(foundedUser => {
                if(foundedUser === undefined) {
                    if(user.projectName)
                        addProject(user.projectName.toLowerCase());
                    addUser({
                        username: user.username,
                        password: user.password,
                        projectName: user.projectName,
                        photo: user.photo
                    });
                }
                return foundedUser;
            }
        ).catch(err => {
            return err
        });
};

const isUserAlreadyExist = username => {
    return getUsers().then(users => {
            let u = users.filter(u => u.username === username);
            return u[0];
        }
    ).catch(err => {
        return err
    });
};

const isAuthenticate = (username, password) => axios.post(BASE_AUTH_URL, qs.stringify({
    username: username,
    password: password
})).then(response => {
    if(response.status === 200)
        return response.data.user;
    return undefined;
}).catch(err => {
    console.log(`Error during isAuthenticate method, err: ${err}`);
    return undefined;
});

export default {
    registerUser: registerUser,
    isAuthenticate: isAuthenticate,
    getUsers: getUsers,
    getUserByUsername: getUserByUsername
}