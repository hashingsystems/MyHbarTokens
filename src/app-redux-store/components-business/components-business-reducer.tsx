import { combineReducers } from "redux";
import { appSnackBarReducer } from "../../components-business/app-snack-bar";

export const componentsBusinessReducer = combineReducers({
  appSnackBar: appSnackBarReducer
})