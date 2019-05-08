import {createStore} from 'redux';
import {default as acxApp} from './reducers';

const store = createStore(acxApp);

export default store;
