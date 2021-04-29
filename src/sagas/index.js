import { authSaga } from "./authSaga";
import { paySaga } from "./paymentSaga";
import { addressListSaga } from "./addressListSaga";
import { fork } from "redux-saga/effects";
import { routeSaga } from "./routeSaga"

export function* rootSaga() {
  yield fork(authSaga);
  yield fork(paySaga);
  yield fork(addressListSaga);
  yield fork(routeSaga);
}