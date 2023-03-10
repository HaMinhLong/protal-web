import { put, call, takeLatest, takeEvery } from 'redux-saga/effects';
import { save, info, query, updateStatusSlice } from 'features/category/categorySlice';
import { getListCategory, getOneCategory, createCategory, updateCategory, updateStatusCategory, deleteCategory } from 'api/category';
import { uploadImage, deleteImage } from 'api/upload';

function* getList({ payload, callback }) {
  try {
    const { data } = yield call(getListCategory, payload);

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
    const { data } = yield call(getListCategory, payload);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* getOne({ payload: { id }, callback }) {
  try {
    const { data } = yield call(getOneCategory, id);
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
    const { data } = yield call(createCategory, payload);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* handleUploadImage({ payload, callback }) {
  try {
    const { data } = yield call(uploadImage, payload);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* handleDeleteImage({ payload, callback }) {
  try {
    const { data } = yield call(deleteImage, payload);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* updateRecord({ payload: { id, params }, callback }) {
  try {
    const { data } = yield call(updateCategory, id, params);
    if (callback && data) callback(data);
  } catch (error: any) {
    console.log('error', error);
    if (callback) callback(error);
  }
}

function* updateStatus({ payload: { id, params }, callback }) {
  try {
    const { data } = yield call(updateStatusCategory, id, params);

    yield put(
      updateStatusSlice({
        id: id,
        status: params.status
      })
    );

    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

function* deleteRecord({ payload: { id }, callback }) {
  try {
    const { data } = yield call(deleteCategory, id);
    if (callback && data) callback(data);
  } catch (error: any) {
    if (callback) callback(error);
  }
}

const typeFetch: any = 'category/fetch';
const typeGetOne: any = 'category/getOne';
const typeAdd: any = 'category/add';
const typeFetchLazyLoading: any = 'category/fetchLazyLoading';
const typeUpdate: any = 'category/update';
const typeUpdateStatus: any = 'category/updateStatus';
const typeDelete: any = 'category/delete';
const typeImageUpload: any = 'image/upload';
const typeImageDeleteImage: any = 'image/delete';

export function* categorySaga(): any {
  yield takeLatest(typeFetch, getList);
  yield takeLatest(typeGetOne, getOne);
  yield takeLatest(typeAdd, create);
  yield takeEvery(typeFetchLazyLoading, fetchLazyLoading);
  yield takeLatest(typeUpdate, updateRecord);
  yield takeLatest(typeUpdateStatus, updateStatus);
  yield takeLatest(typeDelete, deleteRecord);
  yield takeLatest(typeImageUpload, handleUploadImage);
  yield takeLatest(typeImageDeleteImage, handleDeleteImage);
}
