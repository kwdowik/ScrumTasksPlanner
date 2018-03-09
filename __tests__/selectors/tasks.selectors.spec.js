import * as reducer from '../../src/reducers/tasks.reducers'

// Prepare data

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

const emptyTasksState = {
    tasks: [],
    task: {},
    taskEditable: false,
    currTabIndex: 0,
};

const fullTasksState = {
    tasks: testTasksArr,
    task: testTasksArr[0],
    taskEditable: true,
    currTabIndex: 2,
};

const userState = {
    user: {
        projectName: 'test_projectName1',
        username: 'Test_username',
        password: 'Test_password',
        salt: 'Test_salt',
        createDate: Date.parse('2017-01-01'),
        photo: 'Test_photo'
    },
    error: '',
    isSigningIn: false
};

const emptyState = {
    tasks: emptyTasksState,
    users: userState
};

const fullState = {
    tasks: fullTasksState,
    users: userState
};

//

describe('projects selectors', () => {
    it('should return initial state - tasks', () => {
        expect(reducer.getTasksForCurrentUser(emptyState)).toEqual(
            emptyState.tasks.tasks
        )
    });

    it('should return all projects for current user', () => {
        const projectName = 'test_projectName1';
        expect(reducer.getTasksForCurrentUser(fullState)).toEqual(
            fullState.tasks.tasks.filter(user => user.projectName  === projectName)
        )
    });

    it('should return initial state - task', () => {
        expect(reducer.getOneTask(emptyTasksState)).toEqual(
            emptyTasksState.task
        )
    });

    it('should return one task', () => {
        expect(reducer.getOneTask(fullTasksState)).toEqual(
            fullTasksState.task
        )
    });

    it('should return initial state - taskEditable', () => {
        const taskWasEdited = false;
        expect(reducer.getEditableState(emptyTasksState)).toEqual(
            taskWasEdited
        )
    });

    it('should return if the task was edited', () => {
        const taskWasEdited = true;
        expect(reducer.getEditableState(fullTasksState)).toEqual(
            taskWasEdited
        )
    });

    it('should return initial state - getTabIndex', () => {
        const expectedTaskIndex = 0;
        expect(reducer.getTabIndex(emptyTasksState)).toEqual(
            expectedTaskIndex
        )
    });

    it('should return tab index', () => {
        const expectedTaskIndex = 2;
        expect(reducer.getTabIndex(fullTasksState)).toEqual(
            expectedTaskIndex
        )
    });

});