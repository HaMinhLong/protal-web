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
});

export default rootReducer;
