export default class Api {
  constructor(options) {
    this._options = options;
  }

  _getServerStatus(res) {
    if (res.ok) {
      console.log(res);
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getInitialCards() {
    return fetch(`${this._options.baseUrl}/cards`, {
      method: 'GET',
      headers: this._options.headers,
      credentials: 'include'
    })
      .then(res => {
        return this._getServerStatus(res)
      })
      .then(data => data)
  }

  deleteCard(cardId) {
    return fetch(`${this._options.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._options.headers,
      credentials: 'include'
    })
      .then(res => {
        return this._getServerStatus(res)
      })
      .then(data => data)
  }

  addNewCard(bodyOptions) {
    return fetch(`${this._options.baseUrl}/cards`, {
      method: 'POST',
      headers: this._options.headers,
      credentials: 'include',
      body: JSON.stringify(bodyOptions)
    })
      .then(res => {
        return this._getServerStatus(res)
      })
      .then(data => data)
  }

  changeLikeCardStatus(cardId, isLiked) {
    if (isLiked)
      return fetch(`${this._options.baseUrl}/cards/${cardId}/likes`, {
        method: 'DELETE',
        headers: this._options.headers,
        credentials: 'include'
      })
        .then(res => {
          return this._getServerStatus(res)
        })
        .then(data => data)
    else 
      return fetch(`${this._options.baseUrl}/cards/${cardId}/likes`, {
        method: 'PUT',
        headers: this._options.headers,
        credentials: 'include'
      })
        .then(res => {
          return this._getServerStatus(res)
        })
        .then(data => data)
  }

  getUserInfo() {
    return fetch(`${this._options.baseUrl}/users/me`, {
      method: 'GET',
      headers: this._options.headers,
      credentials: 'include'
    })
      .then(res => {
        return this._getServerStatus(res)
      })
      .then(data => data)
  }

  patchUserAvatar(bodyOptions) {
    return fetch(`${this._options.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._options.headers,
      credentials: 'include',
      body: JSON.stringify(bodyOptions)
    })
      .then(res => {
        return this._getServerStatus(res)
      })
      .then(data => data)
  }

  patchUserInfo(bodyOptions) {
    return fetch(`${this._options.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._options.headers,
      credentials: 'include',
      body: JSON.stringify(bodyOptions)
    })
      .then(res => {
        return this._getServerStatus(res)
      })
      .then(data => data)
  }

}

export const apiSettings = new Api({
  baseUrl: "https://api.alexander.abramov.nomoredomains.sbs",
  // baseUrl: "http://localhost:3000/api",
  headers: {
    // authorization: localStorage.getItem('jwt'),
    // authorization: cookie.get('jwt'),
    "Content-Type": "application/json",
    'Accept': 'application/json'
  },
});
