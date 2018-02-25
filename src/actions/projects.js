import projectService from '../services/project.service';
import * as types from '../constans/ActionTypes';

export const getAllProjects = () => dispatch => {
    projectService.getProjects().then(projects => {
        dispatch(receiveProjects(projects));
    })
};

const receiveProjects = projects => (
    {
        type: types.RECEIVE_PROJECTS,
        projects
    }
);