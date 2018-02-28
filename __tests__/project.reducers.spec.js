import reducer from '../src/reducers/projects.reducers'
import * as types from '../src/constans/ActionTypes'

const state = {
    projects: []
};

describe('projects reducer', () => {
    it('should return the initial sate - getAllProjects', () => {
        expect(reducer(undefined, {}).getAllProjects).toEqual(
            state
        );
    });

    it('should handle receive projects', () => {
        state.projects.concat({
            projectName: 'test_projectName',
            createDate: Date.parse('1994-01-01')
        });
        expect(reducer(undefined, {
            type: types.RECEIVE_PROJECTS,
            projects: state.projects
        }).getAllProjects).toEqual(
            state
        );
    });
});