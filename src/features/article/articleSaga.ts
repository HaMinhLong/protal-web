import { put, call, takeLatest } from "redux-saga/effects";
import {
  save,
  info,
  query,
  updateStatusSlice,
} from "features/article/articleSlice";
import {
  getListArticle,
  getOneArticle,
  createArticle,
  updateArticle,
  updateStatusArticle,
  deleteArticle,
} from "api/article";

function* getList({ payload, callback }) {
  try {
    const { data } = yield call(getListArticle, payload);

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
    const { data } = yield call(getListArticle, payload);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* getOne({ payload: { id }, callback }) {
  try {
    const { data } = yield call(getOneArticle, id);
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
    const { data } = yield call(createArticle, payload);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* updateRecord({ payload: { id, params }, callback }) {
  try {
    const { data } = yield call(updateArticle, id, params);
    if (callback && data) callback(data);
  } catch (error: any) {
    console.log("error", error);
    if (callback) callback(error);
  }
}

function* updateStatus({ payload: { id, params }, callback }) {
  try {
    const { data } = yield call(updateStatusArticle, id, params);

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
    const { data } = yield call(deleteArticle, id);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

const typeFetch: any = "article/fetch";
const typeGetOne: any = "article/getOne";
const typeAdd: any = "article/add";
const typeFetchLazyLoading: any = "article/fetchLazyLoading";
const typeUpdate: any = "article/update";
const typeUpdateStatus: any = "article/updateStatus";
const typeDelete: any = "article/delete";

export function* articleSaga(): any {
  yield takeLatest(typeFetch, getList);
  yield takeLatest(typeGetOne, getOne);
  yield takeLatest(typeAdd, create);
  yield takeLatest(typeFetchLazyLoading, fetchLazyLoading);
  yield takeLatest(typeUpdate, updateRecord);
  yield takeLatest(typeUpdateStatus, updateStatus);
  yield takeLatest(typeDelete, deleteRecord);
}
