import reducer from '../../src/reducers/tasks.reducers'
import * as types from '../../src/constans/ActionTypes'

const emptyState = {
    tasks: [],
    task: {},
    taskEditable: false,
    currTabIndex: 0,
};

export const testTasksArr = [
    {
        name: 'test_name1',
        projectName: 'test_projectName1',
        assignedTo: 'test_assignedTo1',
        createDate: Date.parse('2016-01-01'),
        priority: 'low',
        state: 'new',
        userImg: 'test_userImg1',
    },
    {
        name: 'test_name2',
        projectName: 'test_projectName2',
        assignedTo: 'test_assignedTo2',
        createDate: Date.parse('2015-01-01'),
        priority: 'low',
        state: 'new',
        userImg: 'test_userImg2',
    },
    {
        name: 'test_name3',
        projectName: 'test_projectName3',
        assignedTo: 'test_assignedTo3',
        createDate: Date.parse('2014-01-01'),
        priority: 'low',
        state: 'in progress',
        userImg: 'test_userImg3',
    },
    {
        name: 'test_name4',
        projectName: 'test_projectName4',
        assignedTo: 'test_assignedTo4',
        createDate: Date.parse('2013-01-01'),
        priority: 'low',
        state: 'done',
        userImg: 'test_userImg4',
    },
];

const fullState = {
    tasks: testTasksArr,
    task: {},
    taskEditable: false,
    currTabIndex: 0,
};

describe('tasks reducer', () => {
    it('should return the initial sate - setTasks', () => {
        expect(reducer(undefined, {})).toEqual(
            emptyState
        )
    });

    describe('should handle receive filtered tasks', () => {
        it('filter -> done', () => {
            const filter = 'done';
            expect(reducer(undefined, {
                type: types.RECEIVE_TASKS,
                tasks: fullState.tasks,
                filter: filter
            }).tasks).toEqual(
                fullState.tasks.filter(t => t.state === 'done')
            );
        });
        it('filter -> in progress', () => {
            const filter = 'in progress';
            expect(reducer(undefined, {
                type: types.RECEIVE_TASKS,
                tasks: fullState.tasks,
                filter: filter
            }).tasks).toEqual(
                fullState.tasks.filter(t => t.state === 'in progress')
            );
        });
        it('filter -> all', () => {
            const filter = 'all';
            expect(reducer(undefined, {
                type: types.RECEIVE_TASKS,
                tasks: fullState.tasks,
                filter: filter
            }).tasks).toEqual(
                fullState.tasks
            );
        });
    });

    it('should return the initial sate - setTask', () => {
        expect(reducer(undefined, {})).toEqual(
            emptyState
        )
    });

    it('should handle set task details', () => {
        const task = fullState.tasks[0];
        expect(reducer(undefined, {
            type: types.TASK_DETAILS,
            task: task
        }).task).toEqual(
            task
        );
    });

    it('should handle edit task property', () => {
        const testTaskProjectName = fullState.tasks[0].projectName;
        expect(reducer(undefined, {
            type: types.EDIT_TASK_PROPERTY,
            name: 'projectName',
            value: testTaskProjectName
        }).task.projectName).toEqual(
            testTaskProjectName
        );
    });

    it('should return the initial sate - setTabIndex', () => {
        expect(reducer(undefined, {})).toEqual(
            emptyState
        )
    });

    it('should handle set tab index', () => {
        const tabIndex = 2;
        expect(reducer(undefined, {
            type: types.SET_TAB_INDEX,
            index: tabIndex,
        }).currTabIndex).toEqual(
            tabIndex
        )
    });

    it('should return the initial sate - hasTaskBeenEdited', () => {
        expect(reducer(undefined, {})).toEqual(
            emptyState
        )
    });

    describe('should handle whenever task has been edited', () =>{
        it('edit task property', () => {
            expect(reducer(undefined, {
                type: types.EDIT_TASK_PROPERTY,
            }).taskEditable).toEqual(
                true
            )
        });

        it('saved edited task', () => {
            expect(reducer(undefined, {
                type: types.SAVED_EDITED_TASK,
            }).taskEditable).toEqual(
                false
            )
        });
    })



});