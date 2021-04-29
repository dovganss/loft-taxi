import { combineReducers } from "redux";
import authReducer from "./auth";
import paymentReducer from "./payment";
import addressReducer from "./address";
import routeReducer from "./route"

export default combineReducers({ auth: authReducer, address: addressReducer, payment: paymentReducer, route: routeReducer });