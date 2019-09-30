export interface IconProps {
  iconType: IIconType
}

export const icons = {
  logo_main: require("./resources/logo_main.png"),
  wifi_not_connected: require("./resources/wifi_not_connected.png"),
  wifi_connected: require("./resources/wifi_connected.png"),
  add: require("./resources/add.png"),
  loading: require("./resources/loading.png"),
  close: require("./resources/close.png")
}

export type IIconType = keyof typeof icons