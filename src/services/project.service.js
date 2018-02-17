import axios from 'axios';
import qs from 'qs';

const BASE_URL = 'http://localhost:5000/v1/projects/';


const getProjects = () => axios.get(BASE_URL)
    .then(response => {
        return response.data
    })
    .catch(error => {
        return error
    });

const createProject = projectName => axios.post(BASE_URL, qs.stringify({
        projectName: projectName,
        createDate: new Date().toLocaleString()
    }))
    .then(response => {
        return response
    })
    .catch(error => {
        return error
    });

const addProject = projectName => {
    isProjectAlreadyExist(projectName)
        .then(foundedProject => {
            if(foundedProject === undefined) createProject(projectName)
        })
};

const isProjectAlreadyExist = projectName => {
    return getProjects().then(projects => {
        let p = projects.filter(p => p.projectName.toLowerCase() === projectName.toLowerCase());
        return p[0];
    }).catch(err => {
        return err
    });
};


export default {
    getProjects: getProjects,
    addProject: addProject
}
