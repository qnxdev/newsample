import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store";

it("renders App", () => {
  shallow(
    <Provider store={configureStore()}>
      <App />
    </Provider>
  );
});
