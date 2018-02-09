import { EDIT_TASK_PROPERTY, RECEIVE_TASKS, TASK_DETAILS, SAVED_EDITED_TASK } from "../constans/ActionTypes";
import { combineReducers } from "redux";


const initialState = {
    tasks: [],
    task: {},
    taskEditable: false
};

const setTask = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_TASKS:
            return {
                ...state,
                ...action.tasks.reduce((obj, task) => {
                    obj[task.id] = task;
                    return obj;
                }, {})
            };
        default:
            return state.tasks;
    }
};

const getAllTasks = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_TASKS:
            return action.tasks;
        default:
            return state
    }
};

const getTask = (state = [], action) => {
    switch (action.type) {
        case TASK_DETAILS:
            return { ...state, task: action.task };
        case EDIT_TASK_PROPERTY:
            return { ...state,
                task: {
                    ...state.task,
                    [action.name]: action.value
                }
            };
        default:
            return state;

    }
};

const hasTaskBeenEdited = (state = initialState, action) => {
    switch (action.type) {
        case SAVED_EDITED_TASK:
            return { ...state, taskEditable: false};
        case EDIT_TASK_PROPERTY:
            return { ...state, taskEditable: true};
        default:
            return state;
    }
};


export default combineReducers({
    getAllTasks,
    getTask,
    hasTaskBeenEdited,
})

export const getOneTask = (state) => {
    console.log(`getOneTask: ${JSON.stringify(state.getTask.task === undefined ? initialState.task : state.getTask.task)}`)
    return state.getTask.task === undefined ? initialState.task : state.getTask.task;
};

export const getTasksForCurrentUser = state => {
  return state.tasks.getAllTasks.filter(task =>
      task.projectName === state.users.setUser.user.projectName.toLowerCase());
};

export const getEditableState = (state) => {
    return state.hasTaskBeenEdited.taskEditable;
};



