import React from 'react';
import { render } from '@testing-library/react';
import {Home} from './Home';
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";

jest.mock("./Login.jsx", () => () => <div>Login content</div>);
jest.mock("./registration.jsx", () => () => <div>Registration content</div>);

describe("Home", () => {
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
          <Home />
          </Router>
        </Provider>
    );

    expect(container).toBeInTheDocument();
  });
});