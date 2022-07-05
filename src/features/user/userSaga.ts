import { put, call, takeLatest } from "redux-saga/effects";
import { save, query } from "features/user/userSlice";
import { getListUser } from "api/user";

const userFetch = "user/fetch";

function* getList({ payload, callback }: any) {
  const { data } = yield call(getListUser, payload);
  if (data && data.success) {
    yield put(save(data.results || {}));
  }
  yield put(query(payload));
  if (callback) callback(data);
}

export function* userSaga(): any {
  yield takeLatest(userFetch, getList);
}
