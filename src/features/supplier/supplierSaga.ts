import { put, call, takeLatest } from "redux-saga/effects";
import {
  save,
  info,
  query,
  updateStatusSlice,
} from "features/supplier/supplierSlice";
import {
  getListSupplier,
  getOneSupplier,
  createSupplier,
  updateSupplier,
  updateStatusSupplier,
  deleteSupplier,
} from "api/supplier";

function* getList({ payload, callback }) {
  try {
    const { data } = yield call(getListSupplier, payload);

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
    const { data } = yield call(getListSupplier, payload);
    if (callback) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* getOne({ payload: { id }, callback }) {
  try {
    const { data } = yield call(getOneSupplier, id);
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
    const { data } = yield call(createSupplier, payload);
    if (callback) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* updateRecord({ payload: { id, params }, callback }) {
  try {
    const { data } = yield call(updateSupplier, id, params);
    if (callback) callback(data);
  } catch (error: any) {
    console.log("error", error);
    if (callback) callback(error);
  }
}

function* updateStatus({ payload: { id, params }, callback }) {
  try {
    const { data } = yield call(updateStatusSupplier, id, params);

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
    const { data } = yield call(deleteSupplier, id);
    if (callback) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

const typeFetch: any = "supplier/fetch";
const typeGetOne: any = "supplier/getOne";
const typeAdd: any = "supplier/add";
const typeFetchLazyLoading: any = "supplier/fetchLazyLoading";
const typeUpdate: any = "supplier/update";
const typeUpdateStatus: any = "supplier/updateStatus";
const typeDelete: any = "supplier/delete";

export function* supplierSaga(): any {
  yield takeLatest(typeFetch, getList);
  yield takeLatest(typeGetOne, getOne);
  yield takeLatest(typeAdd, create);
  yield takeLatest(typeFetchLazyLoading, fetchLazyLoading);
  yield takeLatest(typeUpdate, updateRecord);
  yield takeLatest(typeUpdateStatus, updateStatus);
  yield takeLatest(typeDelete, deleteRecord);
}
