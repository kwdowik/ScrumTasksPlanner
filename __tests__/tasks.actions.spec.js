import * as actions from '../src/actions/tasks.actions';
import * as types from '../src/constans/ActionTypes';

const task = {
    name: 'test_name',
    projectName: 'test_project',
    assignedTo: 'test_assignedTo',
    createDate: 'test_crateDate',
    priority: 'task_priority',
    state: 'task_state',
    userImg: 'task_userImg'
};

describe('actions', () => {
    it('should create an action to set tab index', () => {
        const index = 2;
        const expectedAction = {
            type: types.SET_TAB_INDEX,
            index
        };
        expect(actions.setTabIndex(index)).toEqual(expectedAction);
    });

    it('should create an action to set task details', () => {
        const expectedAction = {
            type: types.TASK_DETAILS,
            task
        };
        expect(actions.taskDetails(task)).toEqual(expectedAction);
    });

    it('should create an action to add task', () => {

        const expectedAction = {
            type: types.SAVED_EDITED_TASK,
            task
        };
        expect(actions.addTask(task)).toEqual(expectedAction);
    });

    it('should create an action to edit task property value', () => {
        const name = 'projectName';
        const value = 'test_projectName';
        const expectedAction = {
            type: types.EDIT_TASK_PROPERTY,
            name,
            value
        };
        expect(actions.editTaskPropertyValue(value, name)).toEqual(expectedAction);
    });

    it('should create an action to receive tasks', () => {
        const tasks = [{task}];
        const filter = 'done';
        const expectedAction = {
            type: types.RECEIVE_TASKS,
            tasks,
            filter
        };
        expect(actions.receiveTasks(tasks, filter)).toEqual(expectedAction);
    });

});