import { combineReducers } from "redux";
import authReducer from "./auth";
import addressReducer from "./address";

export default combineReducers({ auth: authReducer, address: addressReducer });
