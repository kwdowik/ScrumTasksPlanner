import * as types from '../constans/ActionTypes';
import userService from '../services/user.service';

export const tryLogin = (user, dispatch) => {
    return userService.isAuthenticate(user.username, user.password)
        .then(isValidUser => {
            if(isValidUser) {
                dispatch(setUser(isValidUser));
                dispatch(setErrorMessage(''));
            }else {
                dispatch(setErrorMessage('Invalid username or password'))
            }
            dispatch(clearLoginProperties());
            return isValidUser !== undefined;
        }).catch(err => console.log(`Error during tryLogin operation ,err: ${err}`));
};

export const clearLoginProperties = () => dispatch => {
    dispatch(editUserPropertyValue('', 'username'));
    dispatch(editUserPropertyValue('', 'password'));
};

export const tryRegisterUser = (user, dispatch) => {
    return userService.registerUser(user)
        .then(isUserExist => {
            isUserExist ? dispatch(setErrorMessage('User already exists')) :
            dispatch(setErrorMessage(''));
            return !isUserExist;
        })
        .catch(err => console.log(`Error during tryRegisterUser operation ,err: ${err}`));
};

export const editUserPropertyValue = (value, name) => (
        {
            type: types.EDIT_USER_PROPERTY,
            name,
            value
        }
);

export const setUser = user => (
    console.log(`action -> setUser`),
        {
            type: types.SET_USER,
            user
        }
);

export const setErrorMessage = errorMsg => (
    console.log(`action -> userInvalid`),
        {
            type: types.INVALID_USER,
            errorMsg
        }
);

export const userRegistered = () => (
    {
        type: types.USER_REGISTERED
    }
)



