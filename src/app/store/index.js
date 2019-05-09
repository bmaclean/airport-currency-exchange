import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {default as acxAppReducer} from './reducers';

const loggerMiddleware = createLogger();

function configureStore(preloadedState) {
	return createStore(
		acxAppReducer,
		preloadedState,
		applyMiddleware(thunkMiddleware, loggerMiddleware)
	);
}

const store = configureStore();

export default store;
