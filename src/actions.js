export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";

export const logIn = (token) => ({ type: LOG_IN, payload: token });
export const logOut = () => ({ type: LOG_OUT });
export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: { email, password },
});


export const SAVE_CARD = 'SAVE_CARD';
export const SAVE_CARD_SUCCESS = 'SAVE_CARD_SUCCESS';
export const GET_CARD = 'GET_CARD';
export const GET_CARD_SUCCESS = 'GET_CARD_SUCCESS';

export const saveCard = (cardNumber, expiryDate, cardName, cvc, token) => ({
  type: SAVE_CARD,
  payload: { cardNumber, expiryDate, cardName, cvc, token },
});
export const saveCardSuccess = () => ({
  type: SAVE_CARD_SUCCESS,
});
export const getCard = (token) => ({ type: GET_CARD, payload: { token } })
export const getCardSuccess = () => ({
  type: GET_CARD_SUCCESS
})


export const REGISTRATED = 'REGISTRATED';
export const REGISTRATED_SUCCESS = 'REGISTRATED_SUCCESS';

export const registrSuccess = () => ({ type: REGISTRATED_SUCCESS });
export const registr = (email, password, name, surname) => ({
  type: REGISTRATED,
  payload: { email, password, name, surname },
});


//список адресов

export const GET_ADDRESS_LIST = 'GET_ADDRESS_LIST';
export const GET_ADDRESS_LIST_SUCCESS = 'GET_ADDRESS_LIST_SUCCESS';
export const GET_ADDRESS_LIST_FAILURE = 'GET_ADDRESS_LIST_FAILURE';

export const getAddressList = () => ({
  type: GET_ADDRESS_LIST,
})

export const getAddressListSuccess = (list) => ({
  type: GET_ADDRESS_LIST_SUCCESS,
  payload: list
})

export const getAddressListFailure = (error) => ({
  type: GET_ADDRESS_LIST_FAILURE,
  payload: error
})


//получение маршрута

export const ROUTE = 'ROUTE';
export const route = (address1, address2) => ({
  type: ROUTE,
  payload: { address1, address2 },
});