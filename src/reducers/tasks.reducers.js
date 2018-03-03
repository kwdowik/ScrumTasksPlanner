import {
    EDIT_TASK_PROPERTY, RECEIVE_TASKS, TASK_DETAILS, SAVED_EDITED_TASK,
    SET_TAB_INDEX, SHOW_ALL
} from "../constans/ActionTypes";
import { combineReducers } from "redux";

const initialState = {
    tasks: [],
    task: {},
    taskEditable: false,
    currTabIndex: 0,
};

const setTabIndex = (state = initialState, action) => {
    switch (action.type) {
        case SET_TAB_INDEX:
            return { ...state,
                currTabIndex: action.index
            };
        default:
            return state
    }
};

const setTasks = (state = initialState, action) => {
    switch (action.type) {
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
        default:
            return state
    }
};

const setTask = (state = initialState, action) => {
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
    setTasks,
    setTask,
    hasTaskBeenEdited,
    setTabIndex,
})

export const getOneTask = (state) => {
    return state.setTask.task === undefined ? initialState.task : state.setTask.task;
};

export const getTasksForCurrentUser = state => {
    return state.tasks.setTasks.tasks.filter(task => {
      return state.users.setUser.user.projectName === undefined
        || task.projectName === undefined ?
          false : task.projectName.toLowerCase() === state.users.setUser.user.projectName.toLowerCase();
  })
};

export const getEditableState = (state) => {
    return state.hasTaskBeenEdited.taskEditable;
};

export const getTabIndex = state => {
    return state.tasks.setTabIndex.currTabIndex;
};



