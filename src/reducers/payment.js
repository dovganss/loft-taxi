import { GET_CARD_SUCCESS } from "../actions";

const initialState = {
  cardData: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CARD_SUCCESS: {
      return {cardData: true}
    }
    default:
      return state;
  }
}