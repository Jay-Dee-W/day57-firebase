import {applyMiddleware, createStore ,combineReducers} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import companyReducer from "./reducers/company";
import personReducer from "./reducers/person";


const middleware = [thunk, logger];

export const store = createStore(combineReducers({companyReducer,personReducer}) , applyMiddleware(...middleware));