import { put, call, takeLatest } from "redux-saga/effects";
import {
  save,
  info,
  query,
  updateStatusSlice,
} from "features/userGroup/userGroupSlice";
import {
  getListUserGroup,
  getOneUserGroup,
  createUserGroup,
  updateUserGroup,
  updateStatusUserGroup,
  deleteUserGroup,
} from "api/userGroup";

function* getList({ payload, callback }) {
  const { data } = yield call(getListUserGroup, payload);

  if (data && data.success) {
    yield put(save(data.results || {}));
  }
  yield put(query(payload));
  if (callback) callback(data);
}

function* fetchLazyLoading({ payload, callback }) {
  const { data } = yield call(getListUserGroup, payload);
  if (callback) callback(data);
}

function* getOne({ payload: { id }, callback }) {
  const { data } = yield call(getOneUserGroup, id);
  if (data) {
    yield put(info(data.results.list || {}));
  }
  if (callback) callback(data);
}

function* create({ payload, callback }) {
  const { data } = yield call(createUserGroup, payload);
  if (callback) callback(data);
}

function* updateRecord({ payload: { id, params }, callback }) {
  const { data } = yield call(updateUserGroup, id, params);
  if (callback) callback(data);
}

function* updateStatus({ payload: { id, params }, callback }) {
  const { data } = yield call(updateStatusUserGroup, id, params);

  yield put(
    updateStatusSlice({
      id: id,
      status: params.status,
    })
  );

  if (callback) callback(data);
}

function* deleteRecord({ payload: { id }, callback }) {
  const { data } = yield call(deleteUserGroup, id);
  if (callback) callback(data);
}

const typeFetch: any = "userGroup/fetch";
const typeGetOne: any = "userGroup/getOne";
const typeAdd: any = "userGroup/add";
const typeFetchLazyLoading: any = "userGroup/fetchLazyLoading";
const typeUpdate: any = "userGroup/update";
const typeUpdateStatus: any = "userGroup/updateStatus";
const typeDelete: any = "userGroup/delete";

export function* userGroupSaga(): any {
  yield takeLatest(typeFetch, getList);
  yield takeLatest(typeGetOne, getOne);
  yield takeLatest(typeAdd, create);
  yield takeLatest(typeFetchLazyLoading, fetchLazyLoading);
  yield takeLatest(typeUpdate, updateRecord);
  yield takeLatest(typeUpdateStatus, updateStatus);
  yield takeLatest(typeDelete, deleteRecord);
}
