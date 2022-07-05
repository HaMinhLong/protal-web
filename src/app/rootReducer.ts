import { combineReducers } from "redux";

import userReducer from "features/user/userSlice";
import menuReducer from "features/menu/menuSlice";
import customizationReducer from "features/customization/customizationReducer";
import snackbarReducer from "features/snackbar/snackbarSlice";

const rootReducer = combineReducers({
  user: userReducer,
  customization: customizationReducer,
  menu: menuReducer,
  snackbar: snackbarReducer,
});

export default rootReducer;
