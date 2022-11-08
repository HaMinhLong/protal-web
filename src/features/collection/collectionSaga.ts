import { put, call, takeLatest } from "redux-saga/effects";
import {
  save,
  info,
  query,
  updateStatusSlice,
} from "features/collection/collectionSlice";
import {
  getListCollection,
  getOneCollection,
  createCollection,
  updateCollection,
  updateStatusCollection,
  deleteCollection,
} from "api/collection";

function* getList({ payload, callback }) {
  try {
    const { data } = yield call(getListCollection, payload);

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
    const { data } = yield call(getListCollection, payload);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* getOne({ payload: { id }, callback }) {
  try {
    const { data } = yield call(getOneCollection, id);
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
    const { data } = yield call(createCollection, payload);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* updateRecord({ payload: { id, params }, callback }) {
  try {
    const { data } = yield call(updateCollection, id, params);
    if (callback && data) callback(data);
  } catch (error: any) {
    console.log("error", error);
    if (callback) callback(error);
  }
}

function* updateStatus({ payload: { id, params }, callback }) {
  try {
    const { data } = yield call(updateStatusCollection, id, params);

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
    const { data } = yield call(deleteCollection, id);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

const typeFetch: any = "collection/fetch";
const typeGetOne: any = "collection/getOne";
const typeAdd: any = "collection/add";
const typeFetchLazyLoading: any = "collection/fetchLazyLoading";
const typeUpdate: any = "collection/update";
const typeUpdateStatus: any = "collection/updateStatus";
const typeDelete: any = "collection/delete";

export function* collectionSaga(): any {
  yield takeLatest(typeFetch, getList);
  yield takeLatest(typeGetOne, getOne);
  yield takeLatest(typeAdd, create);
  yield takeLatest(typeFetchLazyLoading, fetchLazyLoading);
  yield takeLatest(typeUpdate, updateRecord);
  yield takeLatest(typeUpdateStatus, updateStatus);
  yield takeLatest(typeDelete, deleteRecord);
}
