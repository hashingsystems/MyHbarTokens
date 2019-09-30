import { IActionAppOnboardingSetupModal } from "./onboarding-setup-action-types";

const initialState = {
  visible: false
}

export const appOnboardingSetupReducer = (state = initialState, action: IActionAppOnboardingSetupModal): typeof initialState => {
  switch (action.type) {
    case 'APP_SNACK_BAR_SHOW':
      return {
        ...state,
        visible: true
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