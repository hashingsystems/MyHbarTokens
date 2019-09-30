import { INavigationAction } from "./navigation-action.types";

const sideBarInitialState = {
  sidebarVisible: false,
}

export const navigationReducer = (state = sideBarInitialState, action: INavigationAction) => {
  switch (action.type) {
    case 'UPDATE_SIDE_BAR_VISIBILITY':
      return {
        ...state,
        sidebarVisible: action.sidebarVisible
      }
    default:
      return state
  }
}