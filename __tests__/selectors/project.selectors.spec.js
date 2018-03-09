import * as reducer from '../../src/reducers/projects.reducers'

const emptyState = {
    projects: []
};

const fullState = {
    projects: [
        {
            projectName: 'First_test_project',
            createData: Date.parse('2018-01-01')
        },
        {
            projectName: 'Second_test_project',
            createData: Date.parse('2017-01-01')
        },
        {
            projectName: 'Third_test_project',
            createData: Date.parse('2016-01-01')
        }
    ]
};

describe('tasks selectors', () => {
    it('should return initial state', () => {
        expect(reducer.getProjects(emptyState)).toEqual(
            emptyState.projects
        )
    });

    it('should return all tasks', () => {
        expect(reducer.getProjects(fullState)).toEqual(
            fullState.projects
        )
    });
});