export interface IActionUpdateSideBarVisibility {
  type: 'UPDATE_SIDE_BAR_VISIBILITY';
  sidebarVisible: boolean
}

export type INavigationAction = IActionUpdateSideBarVisibility