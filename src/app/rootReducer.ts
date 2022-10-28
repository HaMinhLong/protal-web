import { combineReducers } from "redux";

import menuReducer from "features/menu/menuSlice";
import customizationReducer from "features/customization/customizationReducer";
import snackbarReducer from "features/snackbar/snackbarSlice";
import userReducer from "features/user/userSlice";
import userGroupReducer from "features/userGroup/userGroupSlice";
import websiteGroupReducer from "features/websiteGroup/websiteGroupSlice";
import websiteReducer from "features/website/websiteSlice";
import menuWebsiteReducer from "features/menuWebsite/menuWebsiteSlice";
import categoryGroupReducer from "features/categoryGroup/categoryGroupSlice";
import categoryReducer from "features/category/categorySlice";
import articleReducer from "features/article/articleSlice";
import messageReducer from "features/message/messageSlice";
import producerGroupReducer from "features/producerGroup/producerGroupSlice";
import producerReducer from "features/producer/producerSlice";
import supplierGroupReducer from "features/supplierGroup/supplierGroupSlice";
import supplierReducer from "features/supplier/supplierSlice";
import productReducer from "features/product/productSlice";
import paymentMethodReducer from "features/paymentMethod/paymentMethodSlice";
import orderReducer from "features/order/orderSlice";
import productCommentReducer from "features/productComment/productCommentSlice";

const rootReducer = combineReducers({
  customization: customizationReducer,
  menu: menuReducer,
  snackbar: snackbarReducer,
  user: userReducer,
  userGroup: userGroupReducer,
  websiteGroup: websiteGroupReducer,
  website: websiteReducer,
  menuWebsite: menuWebsiteReducer,
  categoryGroup: categoryGroupReducer,
  category: categoryReducer,
  article: articleReducer,
  message: messageReducer,
  producerGroup: producerGroupReducer,
  producer: producerReducer,
  supplierGroup: supplierGroupReducer,
  supplier: supplierReducer,
  product: productReducer,
  paymentMethod: paymentMethodReducer,
  order: orderReducer,
  productComment: productCommentReducer,
});

export default rootReducer;
