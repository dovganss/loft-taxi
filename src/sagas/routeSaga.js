import { takeEvery, call, put } from "redux-saga/effects";
import { ROUTE, routeSuccess } from "../actions";
import { serverRoute } from "../api";

export function* subCoordsSaga(action) {
  const address1 = action.payload[0];
  const address2 = action.payload[1];
  const data = yield call(serverRoute, address1, address2);
  if (data.length != 0) {
    yield put(routeSuccess(data));
  }
}
export function* routeSaga() {
  yield takeEvery(ROUTE, subCoordsSaga);
}
