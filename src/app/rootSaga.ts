import { all } from "redux-saga/effects";

import { userSaga } from "features/user/userSaga";
import { userGroupSaga } from "features/userGroup/userGroupSaga";
import { websiteGroupSaga } from "features/websiteGroup/websiteGroupSaga";
import { websiteSaga } from "features/website/websiteSaga";
import { menuWebsiteSaga } from "features/menuWebsite/menuWebsiteSaga";
import { categoryGroupSaga } from "features/categoryGroup/categoryGroupSaga";
import { categorySaga } from "features/category/categorySaga";
import { articleSaga } from "features/article/articleSaga";
import { messageSaga } from "features/message/messageSaga";
import { producerGroupSaga } from "features/producerGroup/producerGroupSaga";
import { producerSaga } from "features/producer/producerSaga";
import { supplierGroupSaga } from "features/supplierGroup/supplierGroupSaga";
import { supplierSaga } from "features/supplier/supplierSaga";
import { productSaga } from "features/product/productSaga";
import { paymentMethodSaga } from "features/paymentMethod/paymentMethodSaga";
import { orderSaga } from "features/order/orderSaga";
import { productCommentSaga } from "features/productComment/productCommentSaga";
import { locationSaga } from "features/location/locationSaga";

export default function* rootSaga() {
  yield all([
    userSaga(),
    userGroupSaga(),
    websiteGroupSaga(),
    websiteSaga(),
    menuWebsiteSaga(),
    categoryGroupSaga(),
    categorySaga(),
    articleSaga(),
    messageSaga(),
    producerGroupSaga(),
    producerSaga(),
    supplierGroupSaga(),
    supplierSaga(),
    productSaga(),
    paymentMethodSaga(),
    orderSaga(),
    locationSaga(),
    productCommentSaga(),
  ]);
}
