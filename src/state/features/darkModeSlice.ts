/* eslint-disable no-unused-vars */

import { createSlice, Slice, PayloadAction } from "@reduxjs/toolkit"
// eslint-disable-next-line import/no-cycle
import { RootState } from "../rootReducer"

type SliceState = {
  isDarkMode: boolean
}

const defaultData = {
  isDarkMode: false,
}

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: defaultData as SliceState,
  reducers: {
    toggle: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isDarkMode = !state.isDarkMode
    },
  },
})

export const { toggle } = darkModeSlice.actions

export default darkModeSlice.reducer

export const selectIsDarkMode = (state: RootState) => state.darkMode.isDarkMode
