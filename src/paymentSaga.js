import { takeEvery, call, put } from "@redux-saga/core/effects";
import { CARD_INFO, verifierDone } from "./actions";
import { paymentCard } from "./api";

export function* doPayment(action) {
  const { cardNumber, expiryDate, cardName, cvc, token } = action.payload;
  const success = yield call(paymentCard, cardNumber, expiryDate, cardName, cvc, token)
  if (success) {
    yield put(verifierDone())
  }
}

export function* paymentSaga() {
  yield takeEvery(CARD_INFO, doPayment)
}