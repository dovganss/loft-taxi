import { GET_ADDRESS_LIST_SUCCESS } from "../actions";

const initialState = {
  list: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ADDRESS_LIST_SUCCESS: {
      return {
        list: action.payload,
      }
    }
    default:
      return state;
  }
}