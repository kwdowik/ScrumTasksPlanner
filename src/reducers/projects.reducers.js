import { RECEIVE_PROJECTS } from "../constans/ActionTypes";
import { combineReducers } from "redux";

const initialState = {
    projects: []
};

const getAllProjects = (state = initialState, action) => {
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

export default combineReducers({
    getAllProjects,
})

export const getProjects = state => {
    return state.projects.getAllProjects === undefined ? initialState.projects : state.projects.getAllProjects
};