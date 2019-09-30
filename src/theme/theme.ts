import { color } from "./color";

export interface ITheme {
  id: IThemeId,
  name: string,
  textPrimary: string,
  textInverted: string,
  backgroundPrimary: string,
  backgroundSecondary: string
}

export const ThemeLight: ITheme = {
  id: "theme_light",
  name: "Light",
  textPrimary: color.palette.black,
  textInverted: color.palette.white,
  backgroundPrimary: color.palette.white,
  backgroundSecondary: color.palette.grey
}

export const ThemeDark: ITheme = {
  id: "theme_dark",
  name: "Dark",
  textPrimary: color.palette.white,
  textInverted: color.palette.black,
  backgroundPrimary: color.palette.blueBold,
  backgroundSecondary: color.palette.greyLight
}

export type IThemeId = "theme_dark" | "theme_light"

export const getThemeFromId = (themeId: IThemeId): ITheme => {
  switch(themeId) {
    case "theme_dark":
      return ThemeDark;
    case "theme_light":
      return ThemeLight;
    default:
      return ThemeLight;
  }
}