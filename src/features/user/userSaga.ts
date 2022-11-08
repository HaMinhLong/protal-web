import { put, call, takeLatest } from "redux-saga/effects";
import { save, info, query, updateStatusSlice } from "features/user/userSlice";
import {
  getListUser,
  getOneUser,
  createUser,
  updateUser,
  updateStatusUser,
  deleteUser,
} from "api/user";

function* getList({ payload, callback }) {
  try {
    const { data } = yield call(getListUser, payload);

    if (data && data.success) {
      yield put(save(data.results || {}));
    }
    yield put(query(payload));
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* fetchLazyLoading({ payload, callback }) {
  try {
    const { data } = yield call(getListUser, payload);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* getOne({ payload: { id }, callback }) {
  try {
    const { data } = yield call(getOneUser, id);
    if (data) {
      yield put(info(data.results.list || {}));
    }
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* create({ payload, callback }) {
  try {
    const { data } = yield call(createUser, payload);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* updateRecord({ payload: { id, params }, callback }) {
  try {
    const { data } = yield call(updateUser, id, params);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* updateStatus({ payload: { id, params }, callback }) {
  try {
    const { data } = yield call(updateStatusUser, id, params);

    yield put(
      updateStatusSlice({
        id: id,
        status: params.status,
      })
    );

    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* deleteRecord({ payload: { id }, callback }) {
  try {
    const { data } = yield call(deleteUser, id);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

const typeFetch: any = "user/fetch";
const typeGetOne: any = "user/getOne";
const typeAdd: any = "user/add";
const typeFetchLazyLoading: any = "user/fetchLazyLoading";
const typeUpdate: any = "user/update";
const typeUpdateStatus: any = "user/updateStatus";
const typeDelete: any = "user/delete";

export function* userSaga(): any {
  yield takeLatest(typeFetch, getList);
  yield takeLatest(typeGetOne, getOne);
  yield takeLatest(typeAdd, create);
  yield takeLatest(typeFetchLazyLoading, fetchLazyLoading);
  yield takeLatest(typeUpdate, updateRecord);
  yield takeLatest(typeUpdateStatus, updateStatus);
  yield takeLatest(typeDelete, deleteRecord);
}
