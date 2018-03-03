import { combineReducers } from 'redux';
import {EDIT_USER_PROPERTY, SET_USER, INVALID_USER, USER_REGISTERED, SIGNING_IN} from '../constans/ActionTypes'

const initialState = {
    user: {},
    error: '',
    isSigningIn: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case EDIT_USER_PROPERTY:
            return { ...state,
                user: {
                    ...state.user,
                    [action.name]: action.value
                }
            };
        case SET_USER:
            return { ...state,
                user: action.user
            };
        case SIGNING_IN:
            return { ...state,
                isSigningIn: action.value
            };
        case INVALID_USER:
            return { ...state,
                error: action.errorMsg
            };
        default:
            return state
    }
};

export const getUser = state => {
    return state.user === undefined ? initialState.user : state.user;
};

export const getError = state => {
    return state.error;
};

export const getSigningIn = state => {
    return state.isSigningIn;
};




