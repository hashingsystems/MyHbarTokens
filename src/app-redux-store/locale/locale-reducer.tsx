import { ILocaleActions } from "./locale-action.types";
import { ILocaleId } from "../../locales/locales";

const localeInitialState = {
  currentLocale: "en" as ILocaleId
}

export const localeReducer = (state = localeInitialState, action: ILocaleActions) => {
  switch(action.type) {
    case "UPDATE_CURRENT_LOCALE":
      return {
        ...state,
        currentLocale: action.localeId
      }
    default:
      return state
  }
}