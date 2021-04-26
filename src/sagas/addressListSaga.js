import { takeEvery, call, put } from "redux-saga/effects";
import { GET_ADDRESS_LIST, getAddressListSuccess, getAddressListFailure } from "../actions";
import { serverGetAddressList } from "../api";

export function* addressSaga() {
  const data = yield call(serverGetAddressList);
  if (data.addresses) {
    yield put(getAddressListSuccess(data.addresses));
  }
}
export function* addressListSaga() {
  yield takeEvery(GET_ADDRESS_LIST, addressSaga);
}