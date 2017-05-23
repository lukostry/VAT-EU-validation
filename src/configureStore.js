import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers/reducer';

const loggerMiddleware = createLogger();

const configureStore = () => {
    return createStore(
        reducer,
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    );
};

export default configureStore;
