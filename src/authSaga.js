import { takeEvery, call, put } from 'redux-saga/effects';
import { AUTHENTICATE, logIn } from './actions';
import { serverLogin, serverInfoCard } from './api';

export function* authenticateSaga(action) {
  const { email, password } = action.payload;
  const success = yield call(serverLogin, email, password);
  const card = yield call(serverInfoCard, success.token);
  console.log(card)
  if (localStorage.getItem(success.token) == null) {
    localStorage.setItem(`${success.token}`, '')
  }
  if (success.success) {
    yield put(logIn(success.token, card))
  }
}

export function* authSaga() {
  yield takeEvery(AUTHENTICATE, authenticateSaga)
}