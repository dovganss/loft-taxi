import { all, fork } from 'redux-saga/effects';
import { addressListSaga } from './addressSaga';
import { authSaga } from './authSaga';
import { coordsSaga } from './coordsSaga';
import { paymentSaga } from './paymentSaga';
import { regSaga } from './regSaga';

export function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(paymentSaga),
    fork(addressListSaga),
    fork(regSaga),
    fork(coordsSaga),
  ]);
}