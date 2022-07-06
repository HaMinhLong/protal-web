import { combineReducers } from "redux";

import menuReducer from "features/menu/menuSlice";
import customizationReducer from "features/customization/customizationReducer";
import snackbarReducer from "features/snackbar/snackbarSlice";
import userReducer from "features/user/userSlice";
import userGroupReducer from "features/userGroup/userGroupSlice";

const rootReducer = combineReducers({
  customization: customizationReducer,
  menu: menuReducer,
  snackbar: snackbarReducer,
  user: userReducer,
  userGroup: userGroupReducer,
});

export default rootReducer;
