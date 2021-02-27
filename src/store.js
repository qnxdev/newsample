import { createStore } from "redux";

import reducer from "./reducers/reducer";

function configureStore(
  state = {
    isDark: true,
    employeeData: [],
  }
) {
  return createStore(reducer, state);
}

export default configureStore;
