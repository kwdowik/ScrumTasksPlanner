import * as actions from '../../src/actions/users.actions';
import * as types from '../../src/constans/ActionTypes';

describe('users actions', () => {
    it('should create an action to edit selected user property value', () => {
        const name = 'username';
        const value = 'TestUser';
        const expectedAction = {
            type: types.EDIT_USER_PROPERTY,
            name,
            value
        };
        expect(actions.editUserPropertyValue(value, name)).toEqual(expectedAction);
    });

    it('should create an action to change signing in state', () => {
        const value = true;
        const expectedAction = {
            type: types.SIGNING_IN,
            value
        };
        expect(actions.signingIn(value)).toEqual(expectedAction);
    });

    it('should create an action to set user', () => {
        const user = {
            projectName: 'test_project',
            username: 'test_username',
            password: 'test_password',
            salt: 'test_salt',
            createDate: Date.now(),
            photo: 'test_photo_uri'
        };
        const expectedAction = {
            type: types.SET_USER,
            user
        };
        expect(actions.setUser(user)).toEqual(expectedAction);
    });

    it('should create an action to set error message', () => {
        const errorMsg = 'test error message.';
        const expectedAction = {
            type: types.INVALID_USER,
            errorMsg
        };
        expect(actions.setErrorMessage(errorMsg)).toEqual(expectedAction);
    });

});