import { put, call, takeLatest } from "redux-saga/effects";
import {
  save,
  info,
  query,
  updateStatusSlice,
} from "features/categoryGroup/categoryGroupSlice";
import {
  getListCategoryGroup,
  getOneCategoryGroup,
  createCategoryGroup,
  updateCategoryGroup,
  updateStatusCategoryGroup,
  deleteCategoryGroup,
} from "api/categoryGroup";

function* getList({ payload, callback }) {
  try {
    const { data } = yield call(getListCategoryGroup, payload);

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
    const { data } = yield call(getListCategoryGroup, payload);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* getOne({ payload: { id }, callback }) {
  try {
    const { data } = yield call(getOneCategoryGroup, id);
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
    const { data } = yield call(createCategoryGroup, payload);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* updateRecord({ payload: { id, params }, callback }) {
  try {
    const { data } = yield call(updateCategoryGroup, id, params);
    if (callback && data) callback(data);
  } catch (error: any) {
    console.log("error", error);
    if (callback) callback(error);
  }
}

function* updateStatus({ payload: { id, params }, callback }) {
  try {
    const { data } = yield call(updateStatusCategoryGroup, id, params);

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
    const { data } = yield call(deleteCategoryGroup, id);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

const typeFetch: any = "categoryGroup/fetch";
const typeGetOne: any = "categoryGroup/getOne";
const typeAdd: any = "categoryGroup/add";
const typeFetchLazyLoading: any = "categoryGroup/fetchLazyLoading";
const typeUpdate: any = "categoryGroup/update";
const typeUpdateStatus: any = "categoryGroup/updateStatus";
const typeDelete: any = "categoryGroup/delete";

export function* categoryGroupSaga(): any {
  yield takeLatest(typeFetch, getList);
  yield takeLatest(typeGetOne, getOne);
  yield takeLatest(typeAdd, create);
  yield takeLatest(typeFetchLazyLoading, fetchLazyLoading);
  yield takeLatest(typeUpdate, updateRecord);
  yield takeLatest(typeUpdateStatus, updateStatus);
  yield takeLatest(typeDelete, deleteRecord);
}
