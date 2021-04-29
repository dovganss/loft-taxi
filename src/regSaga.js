import { call, takeEvery, put } from "@redux-saga/core/effects";
import { REGISTRATION, registrationIsDone, logIn } from "./actions";
import { serverRegistration } from "./api";

export function* registrationSaga(action) {
  const { email, password, name, surname } = action.payload;
  const success = yield call(serverRegistration, email, password, name, surname);
  localStorage.setItem(`${name}`, success.token);
  if (success.success) {
    yield put(logIn());
    yield put(registrationIsDone());
  }
}

export function* regSaga() {
  yield takeEvery(REGISTRATION, registrationSaga)
}