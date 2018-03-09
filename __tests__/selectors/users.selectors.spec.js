import * as reducer from '../../src/reducers/users.reducers'

const emptyState = {
    user: {},
    error: '',
    isSigningIn: false
};

const fullState = {
    user: {
        projectName: 'test_projectName1',
        username: 'Test_username',
        password: 'Test_password',
        salt: 'Test_salt',
        createDate: Date.parse('2017-01-01'),
        photo: 'Test_photo'
    },
    error: 'User already exists',
    isSigningIn: true
};

describe('users selectors', () => {
    it('should return initial state - getUser', () => {
        expect(reducer.getUser(emptyState)).toEqual(
            emptyState.user
        )
    });

    it('should return current user', () => {
        expect(reducer.getUser(fullState)).toEqual(
            fullState.user
        )
    });

    it('should return initial state - getSigningIn', () => {
        const isUserSigningIn = false;
        expect(reducer.getSigningIn(emptyState)).toEqual(
            isUserSigningIn
        )
    });

    it('should return state if user signing in now', () => {
        const isUserSigningIn = true;
        expect(reducer.getSigningIn(fullState)).toEqual(
            isUserSigningIn
        )
    });

    it('should return initial state - getError', () => {
        const emptyErrorMsg = '';
        expect(reducer.getError(emptyState)).toEqual(
            emptyErrorMsg
        )
    });

    it('should return error message', () => {
        const emptyErrorMsg = 'User already exists';
        expect(reducer.getError(fullState)).toEqual(
            emptyErrorMsg
        )
    });
});