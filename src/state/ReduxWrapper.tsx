// eslint-disable-next-line no-use-before-define
import React from "react"
import { Provider } from "react-redux"

import store from "./store"

// eslint-disable-next-line react/prop-types
export default ({ element }) => <Provider store={store}>{element}</Provider>
