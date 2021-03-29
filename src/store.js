import { createStore } from "redux";

import reducer from "./reducers/reducer";

function configureStore(
  state = {
    isDark: true, //false is from action => to reducer => to this state
    employeeData: [],
    counter: 0,
    currentUser: {},
  }
) {
  return createStore(reducer, state);
}

export default configureStore;
