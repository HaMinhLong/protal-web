import { put, call, takeLatest } from "redux-saga/effects";
import { save, query } from "features/accounts/accountSlice";
import { getListAccount } from "api/account";

const accountFetch = "account/fetch";

function* getList({ payload, callback }: any) {
  const { data } = yield call(getListAccount, payload);
  console.log("data", data);

  if (data && data.success) {
    yield put(save(data.results || {}));
  }
  yield put(query(payload));
  if (callback) callback(data);
}

export function* accountSaga(): any {
  yield takeLatest(accountFetch, getList);
}
