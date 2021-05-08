import React from "react";
import {Profile} from "./Profile";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

describe("Profile", () => {
  it("renders correctly", () => {
    const mockStore = {
      getState: () => ({ isLoggedIn: true }),
      subscribe: () => {},
      dispatch: () => {},
    };
    const history = createMemoryHistory();
    
    const {container} = render(
        <Provider store={mockStore}>
         <Router history={history}>
          <Profile />
          </Router>
        </Provider>
    );

    expect(container).toBeInTheDocument();
  });
});