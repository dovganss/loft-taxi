export const serverLogIn = async (email, password) => {
  return fetch('https://loft-taxi.glitch.me/auth', {
    method: 'POST',
    body: JSON.stringify({
      "email": email,
      "password": password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json()).then(data => data);
};

export const serverSaveCard = async (data) => {
  return fetch(
    'https://loft-taxi.glitch.me/card', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    }).then(res => res.json());
};
export const serverGetCard = async (token) => {
  return fetch('https://loft-taxi.glitch.me/card?token=${token}')
  .then(res => res.json());
};


export const serverReg = async (data) => {
  return fetch(
    'https://loft-taxi.glitch.me/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    }).then(res => res.json());
};

export const serverGetAddressList = async (token) => {
  return fetch(
    'https://loft-taxi.glitch.me/addressList')
    .then(res => res.json());
};