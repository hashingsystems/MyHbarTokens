import { IThemeId } from "../../theme";

export interface IActionUpdateCurrentTheme {
  type: "UPDATE_CURRENT_THEME",
  themeId: IThemeId
}

export type IThemeAction = IActionUpdateCurrentTheme