import redcuers from '../../src/reducers/users.reducers'
import * as types from '../../src/constans/ActionTypes';

const initialState = {
    user: {},
    error: '',
    isSigningIn: false
};

const testUser = {
    projectName: 'test_projectName',
    username: 'test_username',
    password: 'test_password',
    salt: 'test_salt',
    createDate: Date.parse('2019-01-01'),
    photo: 'test_photo'
};

describe('users reducers', () => {
    it('should return the initial state - setUser', () => {
        expect(redcuers(undefined, {})).toEqual(
            initialState
        );
    });
    it('should handle edit user property', () => {
        expect(redcuers({}, {
            type: types.EDIT_USER_PROPERTY,
            name: 'username',
            value: testUser.username
        }).user.username).toEqual(
            testUser.username
        );
    });
    it('should handle set user', () => {
        expect(redcuers({}, {
            type: types.SET_USER,
            user: testUser
        }).user).toEqual(
            testUser
        );
    });
    it('should handle signing in', () => {
        expect(redcuers({}, {
            type: types.SIGNING_IN,
            value: true
        }).isSigningIn).toEqual(
            true
        );
    });

    it('should return the initial state - setError', () => {
        expect(redcuers(undefined, {})).toEqual(
            initialState
        );
    });
    it('should handle invalid user', () => {
        const errorMessage = 'Invalid User';
        expect(redcuers(undefined, {
            type: types.INVALID_USER,
            errorMsg: errorMessage
        }).error).toEqual(
            errorMessage
        );
    });
});