import { createStore } from 'redux';
import rootReducer from './rootReducer'; // Update this path based on your file structure

const store = createStore(rootReducer);

export default store;
