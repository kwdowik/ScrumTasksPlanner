import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/reducer';
import { createLogger } from 'redux-logger';
import { getAllTasks } from '../actions/tasks.actions';


const middleware = [ thunkMiddleware ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default configureStore = (initialState) => {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    store.dispatch(getAllTasks());
    return store;
}