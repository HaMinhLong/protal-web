import { put, call, takeLatest } from "redux-saga/effects";
import {
  save,
  info,
  query,
  updateStatusSlice,
} from "features/product/productSlice";
import {
  getListProduct,
  getOneProduct,
  createProduct,
  updateProduct,
  updateStatusProduct,
  deleteProduct,
} from "api/product";

function* getList({ payload, callback }) {
  try {
    const { data } = yield call(getListProduct, payload);

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
    const { data } = yield call(getListProduct, payload);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* getOne({ payload: { id }, callback }) {
  try {
    const { data } = yield call(getOneProduct, id);
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
    const { data } = yield call(createProduct, payload);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* updateRecord({ payload: { id, params }, callback }) {
  try {
    const { data } = yield call(updateProduct, id, params);
    if (callback && data) callback(data);
  } catch (error: any) {
    console.log("error", error);
    if (callback) callback(error);
  }
}

function* updateStatus({ payload: { id, params }, callback }) {
  try {
    const { data } = yield call(updateStatusProduct, id, params);

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
    const { data } = yield call(deleteProduct, id);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

const typeFetch: any = "product/fetch";
const typeGetOne: any = "product/getOne";
const typeAdd: any = "product/add";
const typeFetchLazyLoading: any = "product/fetchLazyLoading";
const typeUpdate: any = "product/update";
const typeUpdateStatus: any = "product/updateStatus";
const typeDelete: any = "product/delete";

export function* productSaga(): any {
  yield takeLatest(typeFetch, getList);
  yield takeLatest(typeGetOne, getOne);
  yield takeLatest(typeAdd, create);
  yield takeLatest(typeFetchLazyLoading, fetchLazyLoading);
  yield takeLatest(typeUpdate, updateRecord);
  yield takeLatest(typeUpdateStatus, updateStatus);
  yield takeLatest(typeDelete, deleteRecord);
}
