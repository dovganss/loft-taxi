import { GET_CARD, getCardSuccess } from "../actions";
import { serverGetCard } from "../api";
import { takeEvery, call, put } from "redux-saga/effects";

export function* paymentSaga(action) {
  const {token } = action.payload;
  const data = yield call(serverGetCard, token);
  if (data.id) {
    yield put(getCardSuccess());
  }
}
export function* paySaga() {
  yield takeEvery(GET_CARD, paymentSaga);
}