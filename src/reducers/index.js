import { combineReducers } from "redux";
import authReducer from "./auth";
import paymentReducer from "./payment";
import addressReducer from "./address";

export default combineReducers({ auth: authReducer, address: addressReducer, payment: paymentReducer });