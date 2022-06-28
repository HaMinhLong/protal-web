import { combineReducers } from "redux";

import accountReducer from "features/accounts/accountSlice";
import menuReducer from "features/menu/menuSlice";
import customizationReducer from "features/customization/customizationReducer";

const rootReducer = combineReducers({
  account: accountReducer,
  customization: customizationReducer,
  menu: menuReducer,
});

export default rootReducer;
