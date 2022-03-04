import { combineReducers, createStore } from "redux";
import { Reducer } from "./reducers";


export const store = createStore(Reducer);
