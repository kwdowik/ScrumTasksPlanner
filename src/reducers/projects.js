import { RECEIVE_PROJECTS } from "../constans/ActionTypes";
import { combineReducers } from "redux";

const initialState = {
    projects: []
};

const setProject = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PROJECTS:
            return {
                ...state,
                ...action.projects.reduce((obj, project) => {
                    obj[project.id] = project;
                    return obj;
                }, {})
            };
        default:
            return state.projects;
    }
};

const getAllProjects = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PROJECTS:
            return action.projects;
        default:
            return state
    }
};

export default combineReducers({
    getAllProjects,
})

export const getProjects = state => {
    return state.projects.getAllProjects === undefined ? initialState.projects : state.projects.getAllProjects
}