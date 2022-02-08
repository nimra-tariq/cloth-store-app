import { productReducer } from './reducers/productReduce';
import { netBillReducer } from './reducers/netBillReducer';
import { userReducer } from './reducers/userReducer';
import { createStore, combineReducers } from 'redux'

let myReducers = combineReducers({productReducer,netBillReducer,userReducer});
let myStore = createStore(myReducers);
export default myStore;
