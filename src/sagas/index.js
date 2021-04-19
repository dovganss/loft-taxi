import { authSaga } from "./authSaga";
//import { addressListSaga } from "./addressListSaga";
import { fork } from "redux-saga/effects";

export function* rootSaga() {
  yield fork(authSaga);
 // yield fork(addressListSaga);
}