import axios from 'axios';
import bcrypt from 'react-native-bcrypt';
import qs from 'qs';

const BASE_URL = 'http://localhost:5000/v1/users/';

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

const addUser  = user => axios.post(BASE_URL, qs.stringify({
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
                hashPassword(user.password).then(hashedPassword => {
                    addUser({
                        username: user.username,
                        password: hashedPassword,
                        projectName: user.projectName,
                        photo: user.photo
                    });
                })
            }
            return foundedUser;
        }).catch(err => {
            return err
        });
};

const isUserAlreadyExist = username => {
    return getUsers().then(users => {
        let u = users.filter(u => u.username === username);
        return u[0];
    }).catch(err => {
        return err
    });
};

const isAuthenticate = (username, password) => {
    return isUserAlreadyExist(username)
        .then(foundedUser => {
            if(foundedUser) {
                return encryptPassword(password, foundedUser.password).then(validPassword => {
                    if(validPassword) return foundedUser;
                })
            }
            }
        ).catch(err => {
        return err
    });
};

const hashPassword = (password) => {
    return new Promise(
        function (resolve, reject) {
            bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(password, salt, function (err, hash) {
                        if(err) reject(err);
                        resolve(hash.toString());
                    });
                }
            );
        });
};

const encryptPassword = (password, userpassword) => {
    return new Promise((resolve, reject) => {
            bcrypt.compare(password, userpassword, (err, response) => {
                if(err) reject(err);
                resolve(response);
            })
        }
    )
};

export default {
    registerUser: registerUser,
    isAuthenticate: isAuthenticate,
    getUsers: getUsers,
    getUserByUsername: getUserByUsername,
    hashPassword: hashPassword
}