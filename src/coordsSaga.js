import { call, put, takeEvery } from "@redux-saga/core/effects";
import { getCoordsSuccess, GET_COORDS } from "./actions";
import { getCoordsOnServer } from "./api";

export function* subCoordsSaga(action) {
  const address1 = action.payload[0];
  const address2 = action.payload[1];
  const data = yield call(getCoordsOnServer, address1, address2);
  if (data.length != 0) {
    yield put(getCoordsSuccess(data));
  }
}

export function* coordsSaga() {
  yield takeEvery(GET_COORDS, subCoordsSaga)
}