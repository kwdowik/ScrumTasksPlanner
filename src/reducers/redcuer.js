import {combineReducers} from 'redux'
import tasks from '../reducers/tasks'
import users from '../reducers/users'
import projects from './projects.reducers'


const rootReducer = combineReducers({
    tasks,
    users,
    projects
});

export default rootReducer