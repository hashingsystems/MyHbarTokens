import { ISnackBarType } from "../../../components/snack-bar/snack-bar-content";

export interface IActionShowBottomSnackBar {
  type: 'APP_SNACK_BAR_SHOW';
  messageType: ISnackBarType,
  message: string
}

export interface IActionHideBottomSnackBar {
  type: 'APP_SNACK_BAR_HIDE';
}

export type IActionAppSnackBar = IActionShowBottomSnackBar | IActionHideBottomSnackBar
