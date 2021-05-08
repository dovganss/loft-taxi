import React from 'react';
import { render } from '@testing-library/react';
import {Login} from './Login';
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";


describe("Login", () => {
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
          <Login />
          </Router>
        </Provider>
    );

    expect(container).toBeInTheDocument();
  });
});