import { LOG_IN, LOG_OUT } from '../actions';


export const initialState = {
  isLoggedIn: false,
  token: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      return { isLoggedIn: true, token: action.payload.token }
    }
    case LOG_OUT: {
      return { isLoggedIn: false }
    }
    default:
      return state
  }
}