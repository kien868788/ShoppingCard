import axios from 'axios'
import { ResponseWrapper, ErrorWrapper } from './util'
import $store from '../store'
import $router from '../router'

import { API_URL } from '../.env'

/**
 ******************************
 * @API
 ******************************
 */

export function makeLogin ({ email, password }) {
  return new Promise((resolve, reject) => {
    axios.post(`${API_URL}/login`, { email, password })
      .then(response => {
        _setAuthData(response)
        return resolve(new ResponseWrapper(response, response.data))
      }).catch(error => reject(new ErrorWrapper(error)))
  })
}

export function makeLogout () {
  _resetAuthData();
  $router.push({ name: 'login'});
}

export function getToken() {
  return localStorage.getItem("token")
}

function _setAuthData({ token }) {
  localStorage.setItem("token",token);
}

function _resetAuthData() {
  $store.commit("user/SET_DEFAULT_CURRENT_USER");
  localStorage.setItem("token","");
}
