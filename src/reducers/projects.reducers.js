import { RECEIVE_PROJECTS } from "../constans/ActionTypes";
import { combineReducers } from "redux";

const initialState = {
    projects: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_PROJECTS:
            return {
                ...state,
                projects: [...state.projects.concat(action.projects)]
            };
        default:
            return state;
    }
};

export const getProjects = state => {
    return state.projects === undefined ? initialState.projects : state.projects
};