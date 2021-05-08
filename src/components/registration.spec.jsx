import React from 'react';
import { render } from '@testing-library/react';
import {Registration} from './registration';
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";

describe("Registration", () => {
  it("renders correctly", () => {
    const mockStore = {
      getState: () => {},
      subscribe: () => {},
      dispatch: () => {},
    };
    const history = createMemoryHistory();
    
    const {container} = render(
        <Provider store={mockStore}>
         <Router history={history}>
          <Registration />
          </Router>
        </Provider>
    );

    expect(container).toBeInTheDocument();
  });
});