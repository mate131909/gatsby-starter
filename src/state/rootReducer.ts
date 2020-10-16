import { combineReducers } from "@reduxjs/toolkit"
// eslint-disable-next-line import/no-cycle
import darkModeReducer from "./features/darkModeSlice"

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
