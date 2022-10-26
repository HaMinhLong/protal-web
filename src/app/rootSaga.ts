import { all } from "redux-saga/effects";

import { userSaga } from "features/user/userSaga";
import { userGroupSaga } from "features/userGroup/userGroupSaga";
import { websiteGroupSaga } from "features/websiteGroup/websiteGroupSaga";
import { websiteSaga } from "features/website/websiteSaga";
import { menuWebsiteSaga } from "features/menuWebsite/menuWebsiteSaga";
import { categoryGroupSaga } from "features/categoryGroup/categoryGroupSaga";
import { categorySaga } from "features/category/categorySaga";

export default function* rootSaga() {
  yield all([
    userSaga(),
    userGroupSaga(),
    websiteGroupSaga(),
    websiteSaga(),
    menuWebsiteSaga(),
    categoryGroupSaga(),
    categorySaga(),
  ]);
}
