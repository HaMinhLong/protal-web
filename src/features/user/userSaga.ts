import { put, call, takeLatest } from "redux-saga/effects";
import { save, query } from "features/user/userSlice";
import { getListUser } from "api/user";

function* getList({ payload, callback }: any) {
  const { data } = yield call(getListUser, payload);
  if (data && data.success) {
    yield put(save(data.results || {}));
  }
  yield put(query(payload));
  if (callback) callback(data);
}

function* fetchLazyLoading({ payload, callback }) {
  const { data } = yield call(getListUser, payload);
  if (callback) callback(data);
}

const typeFetch = "user/fetch";

export function* userSaga(): any {
  yield takeLatest(typeFetch, getList);
}
