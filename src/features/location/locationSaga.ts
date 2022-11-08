import { put, call, takeLatest } from "redux-saga/effects";
import {
  save,
  info,
  query,
  updateStatusSlice,
} from "features/location/locationSlice";
import {
  getListLocation,
  getOneLocation,
  createLocation,
  updateLocation,
  updateStatusLocation,
  deleteLocation,
} from "api/location";

function* getList({ payload, callback }) {
  try {
    const { data } = yield call(getListLocation, payload);

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
    const { data } = yield call(getListLocation, payload);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* getOne({ payload: { id }, callback }) {
  try {
    const { data } = yield call(getOneLocation, id);
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
    const { data } = yield call(createLocation, payload);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* updateRecord({ payload: { id, params }, callback }) {
  try {
    const { data } = yield call(updateLocation, id, params);
    if (callback && data) callback(data);
  } catch (error: any) {
    console.log("error", error);
    if (callback) callback(error);
  }
}

function* updateStatus({ payload: { id, params }, callback }) {
  try {
    const { data } = yield call(updateStatusLocation, id, params);

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
    const { data } = yield call(deleteLocation, id);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

const typeFetch: any = "location/fetch";
const typeGetOne: any = "location/getOne";
const typeAdd: any = "location/add";
const typeFetchLazyLoading: any = "location/fetchLazyLoading";
const typeUpdate: any = "location/update";
const typeUpdateStatus: any = "location/updateStatus";
const typeDelete: any = "location/delete";

export function* locationSaga(): any {
  yield takeLatest(typeFetch, getList);
  yield takeLatest(typeGetOne, getOne);
  yield takeLatest(typeAdd, create);
  yield takeLatest(typeFetchLazyLoading, fetchLazyLoading);
  yield takeLatest(typeUpdate, updateRecord);
  yield takeLatest(typeUpdateStatus, updateStatus);
  yield takeLatest(typeDelete, deleteRecord);
}
