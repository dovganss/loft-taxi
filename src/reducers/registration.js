import { REGISTRATION_IS_DONE } from "../actions"

const initialState = {
  status: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTRATION_IS_DONE: {
      return { status: true }
    }
    default:
      return state
  }
}