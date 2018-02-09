import axios from 'axios';
// import bcrypt from 'bcrypt';
import { guid } from './utils/guid';

const BASE_URL = 'http://localhost:3000/users/';

const getUsers = () => axios.get(BASE_URL)
    .then(response => {
        return response.data
    })
    .catch(error => {
        return error
    });

const addUser  = user => axios.post(BASE_URL, {
        id: guid(),
        username: user.username,
        password: user.password,
        projectName: user.projectName
    })
    .then(response => {
        return response
    })
    .catch(error => {
        return error
    });

const registerUser = user => {
    return isUserAlreadyExist(user)
        .then(isUserExist => {
            if(!isUserExist) addUser(user);
            return isUserExist;
        }).catch(err => {
            return err
        });
};

const isUserAlreadyExist = user => {
    return getUsers().then(users => {
        let u = users.filter(u => u.username === user.username)
        return u.length > 0;
    }).catch(err => {
        return err
    });
};



const isAuthenticate = (username, password) => {
    let promise = getUsers().then(users => {
        let user = users.filter(u => u.username === username && u.password === password);
        return user[0]
    }).catch(err => {
        return err
    });
    return promise

};

const hashPassword = (password) => {
    return new Promise(
        function (resolve, reject) {
            bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(password, salt, function (err, hash) {
                        if(err) reject(err);
                        resolve(hash.toString());
                    });
                }
            );
        });
};

const encryptPassword = (password, userpassword) => {
    return new Promise(
        function (resolve, reject) {
            bcrypt.compare(password, userpassword, function(err, response) {
                if(err) reject(err);
                resolve(response);
            })
        }
    )
};

export default {
    registerUser: registerUser,
    isAuthenticate: isAuthenticate,
    getUsers: getUsers
}