import { combineReducers, createStore } from "redux";
import { Reducer } from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";

// const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    move: Reducer,
})

export const store = createStore(rootReducer, composeWithDevTools());

// sagaMiddleware.run(moveWatcher);