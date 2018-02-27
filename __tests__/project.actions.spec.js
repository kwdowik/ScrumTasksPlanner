import * as actions from '../src/actions/projects.action';
import * as types from '../src/constans/ActionTypes';

describe('actions', () => {
 it('should create an action to receive projects', () =>{
     const projects = [{}];
     const expectedAction = {
         type: types.RECEIVE_PROJECTS,
         projects
     };
     expect(actions.receiveProjects(projects)).toEqual(expectedAction);
 })
});