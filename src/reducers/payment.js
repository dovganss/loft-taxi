import { VERIFIER_DONE } from "../actions";

const initialState = {
  cardVerified: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case VERIFIER_DONE: {
      return { cardVerified: true }
    }
    default:
      return state
  }
}