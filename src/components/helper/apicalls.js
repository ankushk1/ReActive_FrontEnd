const API = 'http://localhost:4000/api';

export const signup = (user) => {
  return fetch(`${API}/user/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const signin = (user) => {
  return fetch(`${API}/user/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const authenticate = (data, next) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(data));
    next();
  }
};

export const isAuthenticated = () => {
  if (typeof window == 'undefined') {
    return false;
  }
  if (localStorage.getItem('jwt')) {
    return JSON.parse(localStorage.getItem('jwt'));
  } else {
    return false;
  }
};

export const signout = (next) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('jwt');
    next();

    return fetch(`${API}/signout`, {
      method: 'GET',
    })
      .then((response) => console.log('signout success'))
      .catch((err) => console.log(err));
  }
};

export const moneytransfer = (payee) => {
  let userID = '';
  const user = JSON.parse(localStorage.getItem('jwt'));
  userID = user.data.id;
  return fetch(`${API}/user/transfer/${userID}`, {
    method: 'POST',
    headers: {
      token: user.data.token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payee),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getuser = () => {
  let userID = '';
  const user = JSON.parse(localStorage.getItem('jwt'));
  userID = user.data.id;
  return fetch(`${API}/user/${userID}`, {
    method: 'GET',
    headers: {
      token: user.data.token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      console.log(response.json().data);
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
};
