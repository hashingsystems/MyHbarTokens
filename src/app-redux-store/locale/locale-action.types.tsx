import { ILocaleId } from "../../locales/locales";

export interface IActionUpdateCurrentLocale {
  type: "UPDATE_CURRENT_LOCALE",
  localeId: ILocaleId
}

export type ILocaleActions = IActionUpdateCurrentLocale