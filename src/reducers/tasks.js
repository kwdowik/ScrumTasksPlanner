import {EDIT_TASK_PROPERTY, RECEIVE_TASKS, TASK_DETAILS, SAVED_EDITED_TASK} from "../constans/ActionTypes";
import { combineReducers } from "redux";


const initialState = {
    tasks: [],
    task: {},
    taskEditable: false
};

const setTask = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_TASKS:
            console.log(`reducers: RECEIVE_TASKS -> setTask`);
            return {
                ...state,
                ...action.tasks.reduce((obj, task) => {
                    obj[task.id] = task;
                    return obj;
                }, {})
            };
        default:
            console.log(`Stringify ${JSON.stringify(state.tasks)}`);
            return state.tasks;
    }
};

const getAllTasks = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_TASKS:
            console.log(`reducers: RECEIVE_TASKS -> allTasks ${JSON.stringify(action.tasks)}`);
            return action.tasks;
        default:
            console.log(`reducers: RECEIVE_TASKS -> state ${JSON.stringify(state)}`);
            return state
    }
};

const getTask = (state = [], action) => {
    switch (action.type) {
        case TASK_DETAILS:
            console.log(`reducers: TASK_DETAILS -> taskDetails ${JSON.stringify(action.task)}`);
            return { ...state, task: action.task };
        case EDIT_TASK_PROPERTY:
            console.log(`reducers: EDIT_TASK_PROPERTY -> editTask ${JSON.stringify(action)}`);
            return { ...state,
                task: {
                    ...state.task,
                    [action.name]: action.value
                }
            };
        default:
            console.log(`reducers: TASK_DETAILS -> taskDetails state ${JSON.stringify(state)}`);
            return state;

    }
};

const hasTaskBeenEdited = (state = initialState, action) => {
    switch (action.type) {
        case SAVED_EDITED_TASK:
            console.log(`reducers: TOGGLE_TASK_EDIT -> isTaskEditable: ${JSON.stringify(state)}`);
            return { ...state, taskEditable: false};
        case EDIT_TASK_PROPERTY:
            return { ...state, taskEditable: true};
        default:
            console.log(`reducers: TOGGLE_TASK_EDIT -> isTaskEditable state ${JSON.stringify(state)}`);
            return state;
    }
};


export default combineReducers({
    getAllTasks,
    getTask,
    hasTaskBeenEdited,
})

export const getOneTask = (state) => {
    console.log(`getOneTask: ${JSON.stringify(state.getTask.task)}`);
    return state.getTask.task === undefined ? initialState.task : state.getTask.task;
};

export const getEditableState = (state) => {
    console.log(`getEditableState: ${JSON.stringify(state)}`);
    return state.hasTaskBeenEdited.taskEditable;
};

// export const getAllTasks = state => (
//     state.allTasks
// );

// export const getTask = state => (
//     state.taskDetails
// );



