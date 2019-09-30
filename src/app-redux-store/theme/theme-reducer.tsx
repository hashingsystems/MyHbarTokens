import { IThemeAction } from "./theme-action.types";
import { IThemeId } from "../../theme";

const themeInitialState = {
  currentTheme: "theme_light" as IThemeId
}

export const themeReducer = (state = themeInitialState, action: IThemeAction) => {
  switch(action.type) {
    case "UPDATE_CURRENT_THEME":
      return {
        ...state,
        currentTheme: action.themeId
      }
    default:
      return state
  }
}