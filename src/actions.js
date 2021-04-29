// Actions for authorization
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const AUTHENTICATE = 'AUTHENTICATE';

export const logIn = (token, card) => ({
  type: LOG_IN,
  payload: { token, card }
});
export const logOut = () => ({ type: LOG_OUT });
export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: { email, password },
});

// Actions for payment on Profile-page
export const CARD_INFO = 'CARD_INFO';
export const VERIFIER_DONE = 'VERIFIER_DONE';

export const verifierDone = () => ({ type: VERIFIER_DONE });
export const cardInfo = (cardNumber, expiryDate, cardName, cvc, token) => ({
  type: CARD_INFO,
  payload: { cardNumber, expiryDate, cardName, cvc, token }
});

// Actions for address-list
export const GET_ADDRESS_LIST = 'GET_ADDRESS_LIST';
export const GET_ADDRESS_LIST_SUCCESS = 'GET_ADDRESS_LIST_SUCCESS';
export const GET_ADDRESS_LIST_FAILURE = 'GET_ADDRESS_LIST_FAILURE';

export const getAddressList = () => ({
  type: GET_ADDRESS_LIST
});

export const getAddressListSuccess = (list) => ({
  type: GET_ADDRESS_LIST_SUCCESS,
  payload: list
});

export const getAddressListFailure = (error) => ({
  type: GET_ADDRESS_LIST_FAILURE,
  payload: error
});

// Actions for registartion
export const REGISTRATION = 'REGISTRATION';
export const REGISTRATION_IS_DONE = 'REGISTRATION_IS_DONE';

export const registrationAction = (email, password, name, surname) => ({
  type: REGISTRATION,
  payload: { email, password, name, surname },
});

export const registrationIsDone = () => ({ type: REGISTRATION_IS_DONE })

// Actions for get coords
export const GET_COORDS = 'GET_COORDS';
export const GET_COORDS_SUCCESS = 'GET__COORDS_SUCCESS';

export const getCoords = (address1, address2) => ({
  type: GET_COORDS,
  payload: [address1, address2]
});

export const getCoordsSuccess = (coords) => ({
  type: GET_COORDS_SUCCESS,
  payload: coords
});