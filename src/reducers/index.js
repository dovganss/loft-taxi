import { combineReducers } from 'redux';
import auth from './auth';
import payment from './payment';
import address from './address';
import registration from './registration';
import coords from './coords';

export default combineReducers({ auth, payment, address, registration, coords })