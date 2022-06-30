import { combineReducers } from "redux";

import accountReducer from "features/accounts/accountSlice";
import menuReducer from "features/menu/menuSlice";
import customizationReducer from "features/customization/customizationReducer";
import snackbarReducer from "features/snackbar/snackbarSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customization: customizationReducer,
  menu: menuReducer,
  snackbar: snackbarReducer,
});

export default rootReducer;
