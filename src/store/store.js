import { productReducer } from './reducers/productReduce';
import { createStore, combineReducers } from 'redux'

let myReducers = combineReducers({productReducer});
let myStore = createStore(myReducers);
export default myStore;
