import * as types from '../constans/ActionTypes';
import userService from '../services/user.service';

export const tryLogin = (user, dispatch) => {
    dispatch(signingIn(true));
    return userService.isAuthenticate(user.username, user.password)
        .then(isValidUser => {
                dispatch(clearAllProperties());
                if(isValidUser) {
                    dispatch(setUser(isValidUser));
                    dispatch(setErrorMessage(''));
                }
                else {
                    dispatch(setErrorMessage('Invalid username or password'))
                }
                return isValidUser !== undefined;
            }
        ).catch(err => console.log(`Error during tryLogin operation ,err: ${err}`));
};

export const clearAllProperties = () => dispatch => {
    dispatch(editUserPropertyValue('', 'username'));
    dispatch(editUserPropertyValue('', 'password'));
    dispatch(editUserPropertyValue('', 'projectName'));
    dispatch(editUserPropertyValue('', 'photo'));
};

export const tryRegister = (user, dispatch) => {
    return userService.registerUser(user)
        .then(isUserExist => {
                isUserExist ? dispatch(setErrorMessage('User already exists'))
                    : dispatch(setErrorMessage(''));
                return !isUserExist;
            }
        ).catch(err => console.log(`Error during tryRegister operation ,err: ${err}`));
};

export const editUserPropertyValue = (value, name) => (
    {
        type: types.EDIT_USER_PROPERTY,
        name,
        value
    }
);

export const signingIn = value => (
    {
        type: types.SIGNING_IN,
        value
    }
);

export const setUser = user => (
    {
        type: types.SET_USER,
        user
    }
);

export const setErrorMessage = errorMsg => (
    {
        type: types.INVALID_USER,
        errorMsg
    }
);


