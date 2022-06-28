import { all } from "redux-saga/effects";

import { accountSaga } from "features/accounts/accountSaga";

export default function* rootSaga() {
  yield all([accountSaga()]);
}
