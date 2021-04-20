import { takeEvery, call, put } from "redux-saga/effects";
import { GET_ADDRESS_LIST, getAddressListSuccess, getAddressListFailure } from "../actions";
import { serverGetAddressList } from "../api";

export function* addressSaga(action) {
  try {
    const { address1, address2 } = action.payload;
    const data = yield call(serverGetAddressList, address1, address2);
    if (data.addresses) {
      yield put(getAddressListSuccess(data.addresses));
  }
} catch {
  yield put(getAddressListFailure('ошибка получения адреса'));
  } 
}

export function* addressListSaga() {
  yield takeEvery(GET_ADDRESS_LIST, addressSaga);
}