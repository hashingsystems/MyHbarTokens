import { combineReducers } from "redux";
import { navigationReducer } from "../navigation/navigation-reducer";
import { themeReducer } from "../theme/theme-reducer";
import { localeReducer } from "../locale/locale-reducer";
import { componentsBusinessReducer } from "../components-business/components-business-reducer";
import { pagesReducer } from "../pages/pages-reducer";
// Import all components reducers

export const RootReducer = combineReducers({
  navigation: navigationReducer,
  theme: themeReducer,
  locale: localeReducer,
  componentsBusiness: componentsBusinessReducer,
  pages: pagesReducer
})

export type StoreRootState = ReturnType<typeof RootReducer>