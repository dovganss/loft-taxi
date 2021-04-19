import { AUTHENTICATE, logIn } from "../actions";
import { serverLogIn } from "../api";
import { takeEvery, call, put } from "redux-saga/effects";

export function* authenticateSaga(action) {
  const { email, password } = action.payload;
  const data = yield call(serverLogIn, email, password);
  if (data.success) {
    yield put(logIn(data));
  }
}

export function* authSaga() {
  yield takeEvery(AUTHENTICATE, authenticateSaga);
}
