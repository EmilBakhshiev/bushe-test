class Api {
    constructor({ url }) {
      this._url = url;
    }
    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    getData() {
      return fetch(`${this._url}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(this._checkResponse);
    }
}
const config = {
    url: 'http://109.248.175.136:5000/',
  };
  
  const api = new Api(config);
  
  export default api;