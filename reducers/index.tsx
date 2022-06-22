import { combineReducers } from "redux";
import products from './products';
import shipping from './shipping';
import info from './info';

export const reducers = combineReducers({
    products,
    shipping,
    info
})