import { productReducer } from './reducers/productReduce';
import { createStore, combineReducers } from 'redux'

let myReducers = combineReducers({productReducer:productReducer});
let myStore = createStore(myReducers);
export default myStore;

// let users= useSelector(obj =>{
    //     return obj.userSection;
    // });