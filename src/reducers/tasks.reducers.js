import {
    EDIT_TASK_PROPERTY, RECEIVE_TASKS, TASK_DETAILS, SAVED_EDITED_TASK,
    SET_TAB_INDEX, SHOW_ALL
} from "../constans/ActionTypes";

const initialState = {
    tasks: [],
    task: {},
    taskEditable: false,
    currTabIndex: 0,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_TAB_INDEX:
            return { ...state,
                currTabIndex: action.index
            };
        case RECEIVE_TASKS:
            if(action.filter === SHOW_ALL) {
                return {
                    ...state,
                    tasks: action.tasks
                };
            }
            else {
                return {
                    ...state,
                    tasks: action.tasks.filter(task => task.state === action.filter)
                };
            }
        case TASK_DETAILS:
            return { ...state, task: action.task };
        case EDIT_TASK_PROPERTY:
            return { ...state,
                task: {
                    ...state.task,
                    [action.name]: action.value
                },
                taskEditable: true
            };
        case SAVED_EDITED_TASK:
            return { ...state, taskEditable: false};
        default:
            return state
    }
};

export const getOneTask = state => {
    return state.task === undefined ? initialState.task : state.task;
};

export const getTasksForCurrentUser = state => {
    const taskState = state.tasks;
    return taskState.tasks
        .filter(task => filterTaskForCurrentProject(state.users.user, task));
};

const filterTaskForCurrentProject = (user, task) => {
    return user.projectName === undefined
    || task.projectName === undefined ?
        false
        : task.projectName.toLowerCase() === user.projectName.toLowerCase();
};

export const getEditableState = state => {
    return state.taskEditable;
};

export const getTabIndex = state => {
    return state.currTabIndex;
};



