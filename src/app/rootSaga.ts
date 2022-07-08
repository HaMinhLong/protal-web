import { all } from "redux-saga/effects";

import { userSaga } from "features/user/userSaga";
import { userGroupSaga } from "features/userGroup/userGroupSaga";
import { websiteGroupSaga } from "features/websiteGroup/websiteGroupSaga";
import { websiteSaga } from "features/website/websiteSaga";

export default function* rootSaga() {
  yield all([userSaga(), userGroupSaga(), websiteGroupSaga(), websiteSaga()]);
}
