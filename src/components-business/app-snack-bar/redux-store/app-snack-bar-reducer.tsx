import { IActionAppSnackBar } from "./app-snack-bar-action-types";
import { ISnackBarType } from "../../../components/snack-bar/snack-bar-content";

const initialState = {
  visible: false,
  type: "success" as ISnackBarType,
  message: ""
}

export const appSnackBarReducer = (state = initialState, action: IActionAppSnackBar): typeof initialState => {
  switch (action.type) {
    case 'APP_SNACK_BAR_SHOW':
      return {
        ...state,
        visible: true,
        type: action.messageType,
        message: action.message
      }
    case 'APP_SNACK_BAR_HIDE':
      return {
        ...state,
        visible: false,
      }
    default:
      return state
  }
}