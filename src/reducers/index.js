import {combineReducers} from 'redux'
import tasks from '../reducers/tasks'

const rootReducer = combineReducers({
    tasks,
});

export default rootReducer