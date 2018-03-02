import {combineReducers} from 'redux'
import tasks from './tasks.reducers'
import users from './users.reducers'
import projects from './projects.reducers'


const rootReducer = combineReducers({
    tasks,
    users,
    projects
});

export default rootReducer