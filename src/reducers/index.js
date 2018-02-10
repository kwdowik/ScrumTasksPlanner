import {combineReducers} from 'redux'
import tasks from '../reducers/tasks'
import users from '../reducers/users'
import projects from '../reducers/projects'


const rootReducer = combineReducers({
    tasks,
    users,
    projects
});

export default rootReducer