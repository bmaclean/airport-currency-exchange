import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {default as acxAppReducer} from './reducers';

function configureStore(preloadedState) {
	return createStore(
		acxAppReducer,
		preloadedState,
		applyMiddleware(thunkMiddleware)
	);
}

const store = configureStore();

export default store;
