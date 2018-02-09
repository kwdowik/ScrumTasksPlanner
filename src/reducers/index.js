import {combineReducers} from 'redux'
import tasks from '../reducers/tasks'
import users from '../reducers/users'


const rootReducer = combineReducers({
    tasks,
    users
});

export default rootReducer