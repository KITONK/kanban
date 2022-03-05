import { combineReducers, createStore } from "redux";
import { cardReducer } from "./reducers";


export const store = createStore(cardReducer);
