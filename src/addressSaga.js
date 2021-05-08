import { call, put, takeEvery } from "@redux-saga/core/effects";
import { getAddressListSuccess, getAddressListFailure, GET_ADDRESS_LIST } from "./actions";
import { serverGetAddressList } from "./api";

export function* addressSaga() {
  try {
    const data = yield call(serverGetAddressList);
    if (data.addresses) {
      yield put(getAddressListSuccess(data.addresses));
    }
  } catch {
    yield put(getAddressListFailure('Ошибка загрузки адрессов, попробуйте снова'))
  }
}

export function* addressListSaga() {
  yield takeEvery(GET_ADDRESS_LIST, addressSaga)
}