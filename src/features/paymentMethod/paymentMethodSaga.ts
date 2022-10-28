import { put, call, takeLatest } from "redux-saga/effects";
import {
  save,
  info,
  query,
  updateStatusSlice,
} from "features/paymentMethod/paymentMethodSlice";
import {
  getListPaymentMethod,
  getOnePaymentMethod,
  createPaymentMethod,
  updatePaymentMethod,
  updateStatusPaymentMethod,
  deletePaymentMethod,
} from "api/paymentMethod";

function* getList({ payload, callback }) {
  try {
    const { data } = yield call(getListPaymentMethod, payload);

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
    const { data } = yield call(getListPaymentMethod, payload);
    if (callback) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* getOne({ payload: { id }, callback }) {
  try {
    const { data } = yield call(getOnePaymentMethod, id);
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
    const { data } = yield call(createPaymentMethod, payload);
    if (callback) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* updateRecord({ payload: { id, params }, callback }) {
  try {
    const { data } = yield call(updatePaymentMethod, id, params);
    if (callback) callback(data);
  } catch (error: any) {
    console.log("error", error);
    if (callback) callback(error);
  }
}

function* updateStatus({ payload: { id, params }, callback }) {
  try {
    const { data } = yield call(updateStatusPaymentMethod, id, params);

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
    const { data } = yield call(deletePaymentMethod, id);
    if (callback) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

const typeFetch: any = "paymentMethod/fetch";
const typeGetOne: any = "paymentMethod/getOne";
const typeAdd: any = "paymentMethod/add";
const typeFetchLazyLoading: any = "paymentMethod/fetchLazyLoading";
const typeUpdate: any = "paymentMethod/update";
const typeUpdateStatus: any = "paymentMethod/updateStatus";
const typeDelete: any = "paymentMethod/delete";

export function* paymentMethodSaga(): any {
  yield takeLatest(typeFetch, getList);
  yield takeLatest(typeGetOne, getOne);
  yield takeLatest(typeAdd, create);
  yield takeLatest(typeFetchLazyLoading, fetchLazyLoading);
  yield takeLatest(typeUpdate, updateRecord);
  yield takeLatest(typeUpdateStatus, updateStatus);
  yield takeLatest(typeDelete, deleteRecord);
}
