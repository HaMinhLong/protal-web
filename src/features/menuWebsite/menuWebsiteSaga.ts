import { put, call, takeLatest } from "redux-saga/effects";
import {
  save,
  info,
  query,
  updateStatusSlice,
} from "features/menuWebsite/menuWebsiteSlice";
import {
  getListMenuWebsite,
  getOneMenuWebsite,
  createMenuWebsite,
  updateMenuWebsite,
  updateStatusMenuWebsite,
  deleteMenuWebsite,
} from "api/menu";

function* getList({ payload, callback }) {
  try {
    const { data } = yield call(getListMenuWebsite, payload);

    if (data && data.success) {
      yield put(save(data.results || {}));
    }
    yield put(query(payload));
    if (callback) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* fetchLazyLoading({ payload, callback }) {
  try {
    const { data } = yield call(getListMenuWebsite, payload);
    if (callback) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* getOne({ payload: { id }, callback }) {
  try {
    const { data } = yield call(getOneMenuWebsite, id);
    if (data) {
      yield put(info(data.results.list || {}));
    }
    if (callback) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* create({ payload, callback }) {
  try {
    const { data } = yield call(createMenuWebsite, payload);
    if (callback) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* updateRecord({ payload: { id, params }, callback }) {
  try {
    const { data } = yield call(updateMenuWebsite, id, params);
    if (callback) callback(data);
  } catch (error: any) {
    console.log("error", error);
    if (callback) callback(error);
  }
}

function* updateStatus({ payload: { id, params }, callback }) {
  try {
    const { data } = yield call(updateStatusMenuWebsite, id, params);

    yield put(
      updateStatusSlice({
        id: id,
        status: params.status,
      })
    );

    if (callback) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* deleteRecord({ payload: { id }, callback }) {
  try {
    const { data } = yield call(deleteMenuWebsite, id);
    if (callback) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

const typeFetch: any = "menuWebsite/fetch";
const typeGetOne: any = "menuWebsite/getOne";
const typeAdd: any = "menuWebsite/add";
const typeFetchLazyLoading: any = "menuWebsite/fetchLazyLoading";
const typeUpdate: any = "menuWebsite/update";
const typeUpdateStatus: any = "menuWebsite/updateStatus";
const typeDelete: any = "menuWebsite/delete";

export function* menuWebsiteSaga(): any {
  yield takeLatest(typeFetch, getList);
  yield takeLatest(typeGetOne, getOne);
  yield takeLatest(typeAdd, create);
  yield takeLatest(typeFetchLazyLoading, fetchLazyLoading);
  yield takeLatest(typeUpdate, updateRecord);
  yield takeLatest(typeUpdateStatus, updateStatus);
  yield takeLatest(typeDelete, deleteRecord);
}
