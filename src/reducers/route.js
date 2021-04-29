import { ROUTE_SUCCESS } from "../actions";

const initialState = {
  coords: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ROUTE_SUCCESS: {
      return {
        coords: action.payload,
      }
    }
    default:
      return state;
  }
}